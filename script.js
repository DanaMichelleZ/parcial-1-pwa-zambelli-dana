const URL_ENDOPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMONES = URL_ENDOPOINT + 'pokemon';

const mostrarPokemon = (pokemon) => {
    console.log(pokemon)
    const pokedex = document.getElementById("pokedex")

    const li = document.createElement('li');

    const titulo = document.createElement('h3');
    li.appendChild(titulo);

    const descripcion = document.createElement('p');
    li.appendChild(descripcion);

    pokedex.appendChild(li);
    console.log(pokedex);
}

fetch(URL_POKEMONES)
.then(data => data.json())
.then(result => {
    const results = result.results; //este es el array de objetos q devuelve en la consola del nav//
    const primerResultado = results [10]; // results es el objeto en cuestion//

    mostrarPokemon(primerResultado)
})