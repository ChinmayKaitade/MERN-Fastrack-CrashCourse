import { readFile, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";
import express from "express";
const app = express();

const PORT = 3000;

const DATA_FLE = path.join("data", "links.json");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// loadLinks functionality
const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FLE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FLE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

// saveLinks functionality
const saveLinks = async (links) => {
  await writeFile(DATA_FLE, JSON.stringify(links));
};

// Create Server in Express
app.get("/", async (req, res) => {
  try {
    const file = await readFile(path.join("views", "index.html"));
    const links = await loadLinks();

    const content = file.toString().replaceAll(
      "{{ shortened_urls }}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> - ${url}</li>`
        )
        .join("")
    );

    return res.send(content);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
});

app.post("/", async (req, res) => {
  try {
    const { url, shortCode } = req.body;

    // check for duplicate data
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res
        .status(400)
        .send("Short Code already exists. Please choose another short code");
    }

    links[finalShortCode] = url;

    await saveLinks(links);
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
});

app.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    if (!links[shortCode]) return res.status(404).send("404 Error Occurred");

    return res.redirect(links[shortCode]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
