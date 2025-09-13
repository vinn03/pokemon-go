const catchBtn = document.getElementById("catch-btn");
const pokemonName = document.getElementById("pokemon-name");
const pokemonImg = document.getElementById("pokemon-img");
const pokemonTypes = document.getElementById("pokemon-types");

function getRandomPokemonId() {
  // TODO: generate random number between 1 and 1025
  return 1; // placeholder
}

async function fetchPokemon(id) {
  // TODO: fetch data from PokéAPI using the id
}

async function displayPokemon() {
  const id = getRandomPokemonId();
  const pokemon = await fetchPokemon(id);

  // TODO: update DOM with real data
  pokemonName.textContent = pokemon.name;
  pokemonImg.src = pokemon.sprite || "";
  pokemonTypes.textContent = "Type: " + pokemon.types.join(", ");
}

catchBtn.addEventListener("click", displayPokemon);
