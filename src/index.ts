import Debug from "debug";
import dotenv from "dotenv";
import express from "express";
import { resolve } from "path";

dotenv.config({
  path: resolve(__dirname + "../../.env")
});

const debug = Debug("app");

const app = express();
const port = process.env.APP_PORT; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  debug("Called test route");
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  debug(`server started at http://localhost:${port}`);
});
