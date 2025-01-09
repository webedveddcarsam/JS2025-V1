import express from "express";
import { userInfo } from "os";

const app = express();

app.get("/username", (req, res) => {
  res.send({ username: userInfo().username });
});

app.listen(3000, () => {
  console.log("Server Running");
  console.log(userInfo().username);
});
