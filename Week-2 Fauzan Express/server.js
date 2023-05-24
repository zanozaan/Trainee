const path = require("path");
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const app = express();
const port = 3001;

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, { useUnifiedTopology: true });
const dbName = "training";

client
  .connect()
  .then(() => {
    console.log("Connected successfully to server");
    
    const db = client.db(dbName);
    const collection = db.collection("web");
    
    app.post("/web", async (req, res) => {
      await collection.insertOne(req.body);
      res.status(201).json({
        status: "success",
        data: {
          data: req.body,
        },
      });
    });
    
    app.get("/web", async (req, res) => {
      const docs = await collection.find({}).toArray();
      res.status(200).json({
        status: "success",
        data: {
          data: docs,
        },
      });
    });
    
    app.patch("/web/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const updateDoc = {
        $set: { name: req.body.name },
      };
    
      const doc = await collection.updateOne(query, updateDoc);
      res.status(200).json({
        status: "success",
        data: {
          data: doc,
        },
      });
    });
    
    app.delete("/web/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
    
      await collection.deleteOne(query);
      res.status(204).json({
        status: "success",
        data: {
          data: null,
        },
      });
    });
    
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
