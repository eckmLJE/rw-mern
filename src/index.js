import "dotenv/config";
import express from "express";

import models from "./models";
import routes from "./routes";

import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
// Before production, set up cors whitelisting
// https://github.com/expressjs/cors

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1]
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/messages", routes.message);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(3000, () =>
  console.log(`example app listening on port ${process.env.PORT}!`)
);
