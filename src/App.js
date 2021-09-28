import { useState, useEffect } from "react";
import Today from "./components/Today";
import Person from "./components/Person";
import ClickCounter from "./components/ClickCounter";
import BurgerFlipper from "./components/BurgerFlipper";
import RandomJoke from "./components/RandomJoke";
import allPersonQuery from "./queries/allPerson";

import { burgerFlippers } from "./data/burgerFlippers";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch(
        "https://svwtoc8q.api.sanity.io/v1/graphql/production/default",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: allPersonQuery }),
        }
      );
      const { data } = await response.json();
      setPeople(data.allPerson);
    };
    fetchPeople();
  }, []);

  return (
    <div>
      <h1>Hello TDPs</h1>
      <RandomJoke />
      <hr />
      {burgerFlippers.map((flipper, index) => (
        <BurgerFlipper
          key={index}
          magicAngle={flipper.magicAngle}
          prize={flipper.prize}
        />
      ))}
      <ClickCounter />
      <hr />
      <Today day="Tuesday" temp={32} />
      <Today day="Wednesday" temp={34} />
      <Today day="Thursday" temp={31} />
      <hr />
      {people.map((person) => {
        return (
          <Person
            key={person.name}
            name={person.name}
            favoriteProgrammingLanguage={person.favoriteProgrammingLanguage}
            imageURL={person.image.asset.url}
          />
        );
      })}
    </div>
  );
};

export default App;
