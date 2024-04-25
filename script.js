const URL_ENDOPOINT = 'https://pokeapi.co/api/v2/';

const URL_POKEMONES = URL_ENDOPOINT + 'pokemon';

fetch(URL_POKEMONES)
.then(data => data.json())
.then(result => {
    const results = result.results;

    console.log("lista de pokemones", results)
})