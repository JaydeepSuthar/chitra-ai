const { readFile, writeFile } = require('node:fs/promises');

async function main(filePath) {
  try {
    const fileContent = await readFile(filePath, 'base64');

    // Write Base64 string to b64.txt
    await writeFile('b64.txt', fileContent, 'utf-8');

    console.log('Base64 data written to b64.txt');
    return fileContent;
  } catch (error) {
    console.log('Unable to read or write file');
    console.error(error);
    return null;
  }
}

main('img.jpg');

