const express = require("express");
require("./config");
const prodcuts = require("./product");

const app = express();
app.use(express.json());

// app.post("/create", async (req, res) => {
//   let data = new prodcuts(req.body);
//   let result = await data.save();
//   console.log("res", result);
//   res.send(result);
// });

// app.get("/list", async (req, res) => {
//     let data = await prodcuts.find();
//     res.send(data);
// });

// app.delete("/delete/:_id", async (req, res) => {
//     let data = await prodcuts.deleteOne(req.params)
//     console.log('done', req.params)
//     res.send(data)
// })

app.get("/search/:key", async (req, res) => {
    console.log('key', req.params.key)
    
    let data = await prodcuts.find(
        {"$or":[
            {name: {$regex: req.params.key}},
            {brand: {$regex: req.params.key}}
        ]}
    )
    res.send(data)
})
app.listen(3000);
