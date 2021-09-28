import Today from "./components/Today";
import Person from "./components/Person";
import ClickCounter from "./components/ClickCounter";
import BurgerFlipper from "./components/BurgerFlipper";
import RandomJoke from "./components/RandomJoke";

import { people } from "./data/people";
import { burgerFlippers } from "./data/burgerFlippers";

const App = () => {
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
          />
        );
      })}
    </div>
  );
};

export default App;
