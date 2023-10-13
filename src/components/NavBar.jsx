

function NavBar({précédent, suivant, pokemonIndex, pokemonList, setPokemonIndex}) {

const handleClick = (index) => {

setPokemonIndex(index)


}

    return(
   <nav>
    {pokemonIndex>0 ? <button onClick={précédent}>Précédent</button> : ""},
    {pokemonIndex < pokemonList.length-1 ? <button onClick={suivant}>Suivant</button> : ""}

        

        {pokemonList.map((pokemon, index)=>(
    <button key= {pokemon.name} onClick={() => handleClick(index)}>
        {pokemon.name}
   </button>
       ))}
    </nav>
    );
}
    
    export default NavBar;
