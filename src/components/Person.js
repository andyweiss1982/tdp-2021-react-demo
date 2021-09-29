import PersonCard from "../styled/person-card";

const Person = ({ name, favoriteProgrammingLanguage, imageURL }) => {
  return (
    <PersonCard favoriteProgrammingLanguage={favoriteProgrammingLanguage}>
      <h3>My name is {name}</h3>
      <img alt={name} src={imageURL} />
      <h4>My favorite programming language is {favoriteProgrammingLanguage}</h4>
    </PersonCard>
  );
};

export default Person;
