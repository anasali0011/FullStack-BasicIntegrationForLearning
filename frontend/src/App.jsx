import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.error("Error fetching jokes:", err);
      });
  }, []); // ✅ IMPORTANT: empty dependency array

  return (
    <>
      <h1>Full Stack</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.joke}</p> {/* ✅ correct field */}
        </div>
      ))}
    </>
  );
}

export default App;
