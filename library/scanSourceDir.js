const fs = require("fs");
const processFile = require("./processFile");
const printContent = require("./printContent");

const scanSourceDir = () => {
  const sourceDir = "source";
  fs.readdir(sourceDir, (err, filenames) => {
    if (err) return console.log(err);

    filenames.forEach((filename) => {
      processFile(
        sourceDir,
        filename,
        printContent((isSuccess) => {
          filenames[filenames.length - 1] === filename &&
            isSuccess &&
            console.log("\nDone!\n");
        })
      );
    });
  });
};

module.exports = scanSourceDir;
