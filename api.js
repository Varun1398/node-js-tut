const express = require("express");
const mongoDb = require('mongodb')
const dbConnect = require("./mongoDb");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log("data", data);

  res.send(data);
});

app.post("/", async (req, res) => {
  const db = await dbConnect();
  const result = await db.insertOne(req.body);
  res.send(result);
});
app.put("/:name", async (req, res) => {
  const db = await dbConnect();
  const result = await db.updateOne({name: req.params.name}, {$set: req.body});
  res.send(result);
});
app.put("/:id", async (req, res) => {
  const db = await dbConnect();
  const result = await db.deleteOne({_id: new mongoDb.ObjectId(req.params.id)});
  console.log('res', result)
  
  res.send(result);
});

app.listen(5000);
