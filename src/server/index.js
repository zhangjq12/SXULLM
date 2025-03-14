import express from "express";

const app = express();

app.use(express.static("dist"));

app.listen(8081, () => {
  console.log("listening port 8081...");
});
