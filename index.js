import express from "express";
import maizzle from "./maizzle.js";
const app = express();
app.get("/", (req, res) => {
  res.send(maizzle);
});
app.listen(3000, () => {
  console.log("ÇALIŞTIM");
});
