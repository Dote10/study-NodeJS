import express from "express";
const app = express();

app.use(express.json());

app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

app.use("/sky", (req, res, next) => {
  console.log("ues");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    if (true) {
      return res.send("Hello");
    }
    res.send("Bye");
  },
  (req, res, next) => {
    console.log("first2");
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.get("/skyblue/:id", (req, res, next) => {
  console.log(req.path);
  console.log(req.headers);
  console.log(req.query);
  console.log(req.query);
  res.send("hi");
  res.json({ name: "anne" });
  res.setHeader("key", "value");
  res.status(200).send("created");
});

app.use((req, res, next) => {
  res.status(404).send("Not available!@_@");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});

app.listen(8080);
