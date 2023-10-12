import PokemonCard from "./components/PokemonCard.jsx"
import { useState } from "react";
import NavBar from "./components/NavBar.jsx";

function App() {
  
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  
  

      
      const [pokemonIndex, setPokemonIndex] = useState(0);

      const précédent = () => {
        setPokemonIndex( pokemonIndex - 1)}
      const suivant = () => {
        setPokemonIndex( pokemonIndex + 1)}

      
      


      return(
      <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar précédent={précédent} suivant={suivant} pokemonIndex={pokemonIndex} pokemonList={pokemonList}/>
      </div>
      )

      }

export default App;


