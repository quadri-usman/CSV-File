const fs = require("fs");
const express = require("express");
const { json } = require("express");
const { parse } = require("csv-parse");
const csv = require("csv-parser");
const app = express();
app.use(json());
// fs.createReadStream("./NFTNaming-csv -TeamEngine.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     const jsonString = JSON.parse(JSON.stringify(Object.assign({}, row)));
//     console.log(jsonString);
//   })
//   .on("end", function () {
//     console.log("finished");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });
const crypto = require("crypto");
const fileBuffer = fs.readFileSync("NFTNaming-csv -TeamEngine.csv");

fs.createReadStream("NFTNaming-csv -TeamEngine.csv")
  .pipe(csv())
  .on("data", function (row) {
    const hash = crypto.createHash("sha256");
    const finalHex = hash.update(fileBuffer).digest("hex");
    console.log(row);
    console.log(finalHex);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
app.get("/", (req, res) => {
  console.log(row);
});
