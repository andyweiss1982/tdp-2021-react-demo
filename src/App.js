import Today from "./components/Today";
import Person from "./components/Person";

import { people } from "./data/people";

const App = () => {
  return (
    <div>
      <h1>Hello TDPs</h1>
      <Today day="Tuesday" temp={32} />
      <Today day="Wednesday" temp={34} />
      <Today day="Thursday" temp={31} />
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
