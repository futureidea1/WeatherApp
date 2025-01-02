import { useEffect, useState } from "react";
import axios from "axios";
import "./Joke.css";

export default function Joker() {
  const [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data);
      setJoke({
        setup: response.data.setup,
        punchline: response.data.punchline,
      });
    } catch (error) {
      console.error("Error fetching the joke:", error);
    }
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <h2>Jokes of the Day</h2>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New joke</button>
    </div>
  );
}
