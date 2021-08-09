import rnmCharacters from "./characters-response.json";
import "./App.css";

function App() {
  const allCharacters = rnmCharacters.results;

  //filter: all living humans
  const getAllLivingHumans = (allCharacters) =>
    allCharacters.filter(
      (char) => char.species === "Human" && char.status === "Alive"
    );
  console.log(getAllLivingHumans(allCharacters));

  //filter: all males (gender)
  const getAllMaleCharacters = (allCharacters) =>
    allCharacters.filter((males) => males.gender === "Male");
  console.log(getAllMaleCharacters(allCharacters));

  //map: get all character names
  const getAllNames = (allCharacters) =>
    allCharacters.map((characterName) => characterName.name);
  console.log("all names: ", getAllNames(allCharacters));

  //map: get all names and origin - returned das Object origin
  const getAllNamesAndOrigin = (allCharacters) =>
    allCharacters.map((character) => {
      return {
        name: character.name,
        origin: character.origin.name,
      };
    });
  console.log("all names and origin: ", getAllNamesAndOrigin(allCharacters));

  //map: get all names and origin - returned das Object origin
  // mit runden Klammern statt return!
  const getAllNamesAndOrigin2 = (allCharacters) =>
    allCharacters.map((character) => ({
      name: character.name,
      origin: character.origin.name,
    }));
  console.log("all names and origin: ", getAllNamesAndOrigin2(allCharacters));

  //map: get name and origin and all non-humans
  const getNameAndOriginAndNonHumans = (allCharacters) =>
    allCharacters.map((char) => {
      if (char.species !== "Human") {
        return {
          name: char.species,
          origin: char.origin.name,
          species: char.species,
        };
      }
    });
  console.log(
    "all names and origins of non-humans: ",
    getNameAndOriginAndNonHumans(allCharacters)
  );

  return <section></section>;
}

export default App;
