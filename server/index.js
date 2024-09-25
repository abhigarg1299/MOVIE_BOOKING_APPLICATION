import express from "express";

const app = express();
// app.use(express.json()); //middleware for post request
app.get("/", (req, res) => {
  res.send("Hello express");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
