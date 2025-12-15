import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World from CI/CD 🚀 Running CI/CD" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});