import { readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_FLE = path.join("data", "links.json");

// loadLinks functionality
export const loadLinks = async () => {
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
export const saveLinks = async (links) => {
  await writeFile(DATA_FLE, JSON.stringify(links));
};
