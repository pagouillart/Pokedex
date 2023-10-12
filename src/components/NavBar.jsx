

function NavBar({précédent, suivant, pokemonIndex, pokemonList}) {

    return(
   <nav>
    {pokemonIndex>0 ? <button onClick={précédent}>Précédent</button> : ""},
   
    {pokemonIndex < pokemonList.length-1 ? <button onClick={suivant}>Suivant</button> : ""}
    </nav>
    );
}
    
    export default NavBar;
