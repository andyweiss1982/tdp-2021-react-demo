const Person = ({name, favoriteProgrammingLanguage}) => {
  return(
    <div>
      <h3>My name is {name}</h3>
      <h4>My favorite programming language is {favoriteProgrammingLanguage}</h4>
    </div>
  )
}

export default Person