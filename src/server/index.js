import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(cookieParser());

app.get("/getcookie", (req, res) => {
  const data = req.query;
  res.cookie("userId", data.userId);
  res.cookie("userName", data.userName);
  res.cookie("type", data.type);
  res.redirect("/");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(8081, () => {
  console.log("listening port 8081...");
});
