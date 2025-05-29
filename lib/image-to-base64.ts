import { readFile } from "node:fs/promises";

export default async function (filePath: string) {
  try {
    const fileContent = await readFile(filePath, 'base64');
    console.log(fileContent);
    return fileContent;
  } catch (error) {
    console.log("Unable to read file")
    console.error(error);
    return null;
  }
} 