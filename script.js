const catchBtn = document.getElementById("catch-btn");
const pokemonName = document.getElementById("pokemon-name");
const pokemonImg = document.getElementById("pokemon-img");
const shinyImg = document.getElementById("shiny-img");
const pokemonTypes = document.getElementById("pokemon-types");

function getRandomPokemonId() {
  return Math.floor(Math.random() * 151) + 1;
}

async function fetchPokemon(id) {
  // TODO: fetch data from PokéAPI using the id
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const pokemonData = await response.json();
  console.log(pokemonData);

  return {
    name: pokemonData.name,
    sprite: pokemonData.sprites.front_default,
    shiny_sprite: pokemonData.sprites.front_shiny,
    types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
  };
}

async function displayPokemon() {
  const id = getRandomPokemonId();
  const pokemon = await fetchPokemon(id);

  // Update DOM
  pokemonName.textContent = pokemon.name;
  pokemonImg.src = pokemon.sprite || "";
  shinyImg.src = pokemon.shiny_sprite || "";
  pokemonTypes.textContent = "Type: " + pokemon.types.join(", ");
}

catchBtn.addEventListener("click", displayPokemon);
