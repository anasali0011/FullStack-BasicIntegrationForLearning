import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Backend runs properly 🚀");
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "What do you call a fake noodle? An impasta!" },
    { id: 3, joke: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
    { id: 4, joke: "Why don't programmers like nature? It has too many bugs." },
    { id: 5, joke: "Why do Java developers wear glasses? Because they don't see sharp." },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
