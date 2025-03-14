import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// app.get("*", (req, res) => {
//   res.redirect("/");
// });

app.listen(8081, () => {
  console.log("listening port 8081...");
});
