const fs = require("fs");
const path = require("path");

const printContent = (callback) => (content, filename) => {
  const distPath = path.join("dist", filename.replace(".properties", ".json"));
  fs.writeFile(distPath, JSON.stringify(content, null, 2), (err) => {
    if (err) {
      callback(false);
      return console.log(err);
    }

    console.log("File created at: ", distPath);
    callback(true);
  });
};

module.exports = printContent;
