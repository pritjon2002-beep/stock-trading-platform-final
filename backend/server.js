require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error");
    console.log(error);
  });


  app.get("/", async(req,res)=>{
    res.send("welcome to homepage");
  })



 app.get("/holdings", async (req, res) => {
  // we use thunderclient for api endpoint test
  // let tempHoldings = [
  //   {
  //     name: "BHARTIARTL",
  //     qty: 2,
  //     avg: 538.05,
  //     price: 541.15,
  //     net: "+0.58%",
  //     day: "+2.99%",
  //   },
  //   {
  //     name: "HDFCBANK",
  //     qty: 2,
  //     avg: 1383.4,
  //     price: 1522.35,
  //     net: "+10.04%",
  //     day: "+0.11%",
  //   },
  //   {
  //     name: "HINDUNILVR",
  //     qty: 1,
  //     avg: 2335.85,
  //     price: 2417.4,
  //     net: "+3.49%",
  //     day: "+0.21%",
  //   },
  //   {
  //     name: "INFY",
  //     qty: 1,
  //     avg: 1350.5,
  //     price: 1555.45,
  //     net: "+15.18%",
  //     day: "-1.60%",
  //     isLoss: true,
  //   },
  // ];

  // // Save all holdings
  // tempHoldings.forEach(async (item) => {
  //   let newHolding = new HoldingsModel({
  //     name: item.name,
  //     qty: item.qty,
  //     avg: item.avg,
  //     price: item.price,
  //     net: item.net,
  //     day: item.day,
  //   });

  //   await newHolding.save();
  // });

  res.send("Data saved successfully");
});



app.get("/positions", async(req,res)=>{
//   let tempPositions =  [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPositions.forEach(async(item)=>{
//   let newPosition = new PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss
//   });
//   await newPosition.save();
// })
res.send("data saved sucessfully");
});


app.get("/allHoldings", async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async(req,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.listen(PORT, () => {
  console.log(`App Started on port ${PORT}`);
});