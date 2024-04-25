const URL_ENDOPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMONES = URL_ENDOPOINT + 'pokemon';

const mostrarPokemon = (pokemon) => {
    console.log(pokemon)
    const pokedex = document.getElementById("pokedex")

    const li = document.createElement('li');

    const titulo = document.createElement('h3');
    titulo.innerText = pokemon.name;
    li.appendChild(titulo);

    const descripcion = document.createElement('p');
    li.appendChild(descripcion);

    pokedex.appendChild(li);
    console.log(pokedex);
}

fetch(URL_POKEMONES)
.then(data => data.json())
.then(result => {
    const results = result.results; 

    const primerResultado = results [0];
    const segundoResultado = results [1];

    mostrarPokemon(primerResultado)
    mostrarPokemon(segundoResultado)
})