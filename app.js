const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeInput;
    fetch(url).then((response) => {
        if (response.status !== 200) {
            console.log(response.status);
            pokeImage('/assets/share-adivina-pokemon.jpg');
        } else {
            return response.json();
        }
    }).then((data) => {
        console.log(data);
        let pokemonImage = data.sprites.front_default;

        pokeImage(pokemonImage);
    })
}
// fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
}

// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png");
// const imprimir = () => {
    // const pokeName = document.getElementById('pokeName');
    // let pokeInput = pokeName.value;
    // console.log("Hola " + pokeInput);
// }