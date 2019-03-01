import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
// Before production, set up cors whitelisting
// https://github.com/expressjs/cors

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(3000, () =>
  console.log(`example app listening on port ${process.env.PORT}!`)
);
