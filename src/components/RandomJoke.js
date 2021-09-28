import { useEffect, useState } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState("Loading...");

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setJoke(data.joke);
    };
    fetchJoke();
  }, []);

  return <p>{joke}</p>;
};

export default RandomJoke;
