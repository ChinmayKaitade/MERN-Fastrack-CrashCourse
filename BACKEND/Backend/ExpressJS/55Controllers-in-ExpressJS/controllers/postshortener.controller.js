import crypto from "crypto";
import { loadLinks, saveLinks } from "../models/shortener.model.js";
import { readFile } from "fs/promises";
import path from "path";

// getShortenerPage
export const getShortenerPage = async (req, res) => {
  try {
    const file = await readFile(path.join("views", "index.ejs"));
    const links = await loadLinks();

    const content = file.toString().replaceAll(
      "{{ shortened_urls }}",
      Object.entries(links)
        .map(([shortCode, url]) => {
          url = url.length >= 30 ? `${url.slice(0, 30)}...` : url;
          return `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> - ${url}</li>`;
        })
        .join("")
    );

    return res.send(content);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

// postURLShortener
export const postURLShortener = async (req, res) => {
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
};

// redirectToShortLink
export const redirectToShortLink = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    if (!links[shortCode]) return res.status(404).send("404 Error Occurred");

    return res.redirect(links[shortCode]);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};
