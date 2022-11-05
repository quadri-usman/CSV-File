const fs = require("fs");
const express = require("express");
const { json } = require("express");
const { parse } = require("csv-parse");
const app = express();
app.use(json());
fs.createReadStream("./NFTNaming-csv -TeamEngine.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    const jsonString = JSON.parse(JSON.stringify(Object.assign({}, row)));
    console.log(jsonString);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });
