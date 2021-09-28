const query = `
query {
  allPerson{
    _id
		name
    favoriteProgrammingLanguage
   	image {
      asset {
        url
      }
    } 
  }
}
`;

export default query;
