const Person = ({ name, favoriteProgrammingLanguage, imageURL }) => {
  return (
    <div>
      <h3>My name is {name}</h3>
      <img alt={name} src={imageURL} />
      <h4>My favorite programming language is {favoriteProgrammingLanguage}</h4>
    </div>
  );
};

export default Person;
