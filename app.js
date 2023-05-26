const express = require("express");
const db = require("./models");
const { User, Blog } = db;
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/user", async (req, res) => {
  // console.log(db)

  const users = await User.findAll();
  res.json(users);
});

app.get("/blog", async (req, res) => {
  // console.log(db)

  const blogs = await Blog.findAll({ include: User });
  res.json(blogs);
});

app.listen(PORT, () => {
  console.log("running...");
});
