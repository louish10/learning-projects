import fs from "fs/promises";

// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // synchronous

// console.log(fs.readFileSync("./test.txt", "utf8"));

// promise
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((e) => console.error(e));

const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readFile();

// writeFile

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I am writing to this file");
    console.log("File written");
  } catch (err) {
    console.log(err);
  }
};

await writeFile();

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\n Hello!");
    console.log("File appended");
  } catch (err) {
    console.log(err);
  }
};

appendFile();
