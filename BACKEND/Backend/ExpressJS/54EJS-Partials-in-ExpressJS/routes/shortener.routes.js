import { readFile, writeFile } from "fs/promises";
import crypto from "crypto";
import path from "path";
import { Router } from "express";
const router = Router();

const DATA_FLE = path.join("data", "links.json");

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

router.get("/report", (req, res) => {
  const student = [
    {
      name: "Shubham",
      grade: "10th",
      favoriteSubject: "History",
    },
    {
      name: "Rohit",
      grade: "11th",
      favoriteSubject: "English",
    },
    {
      name: "Aman",
      grade: "10th",
      favoriteSubject: "Science",
    },
    {
      name: "Sagar",
      grade: "9th",
      favoriteSubject: "Mathematics",
    },
    {
      name: "Mohit",
      grade: "12th",
      favoriteSubject: "Physics",
    },
  ];

  res.render("report", { student });
});

// Create Server in Express
router.get("/", async (req, res) => {
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

router.post("/", async (req, res) => {
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

router.get("/:shortCode", async (req, res) => {
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

// default export
// export default router;

// named export
export const shortenerRoutes = router;
