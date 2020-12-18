const express = require("express");
const app = express();
const Data = require("./models/data");
const url = "mongodb://127.0.0.1:27017/sample_db";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,PUT, OPTIONS"
  );
  next();
});
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connected Failed");
  });

app.get("", (req, res, next) => {
  Data.find().then((docu) => {
    console.log(docu);
    res.status(200).json({
      Message: docu,
    });
  });
});

app.post("", (req, res, next) => {
  console.log(req.body);
  const datas = new Data({
    name: req.body.companyname,
    data: [[req.body.xValue, req.body.yValue]],
    size: req.body.sizeValue,
  });

  datas.save().then((resp) => {
    res.status(200).json({
      Message: "Data saved successfully",
    });
  });
});

module.exports = app;
