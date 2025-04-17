const pokedexLeft = document.getElementById("pokedex-left");
const pokedexImage = document.getElementById("pokedex-image");
const pokemonSearch = document.getElementById("pokemon-search");

const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

let currentPokemonId = 1; // Start with Bulbasaur (ID 1)

// Open/Close Pokedex Cover
document.addEventListener("click", (e) => {
  if (e.target.closest("#pokedex-left")) {
    pokedexLeft.classList.toggle("open");
  }
});

// Handle Pokemon Search
pokemonSearch.addEventListener("change", (e) => {
  const id = parseInt(e.target.value);
  if (id >= 1 && id <= MAX_POKEMON_ID) {
    currentPokemonId = id;
    fetchPokemonById(currentPokemonId);
  } else {
    e.target.value = currentPokemonId;
  }
});

// Map Pokémon types to background colors
const typeColors = {
  fire: "#FF5733",
  water: "#3498DB",
  grass: "#2ECC71",
  electric: "#F1C40F",
  psychic: "#9B59B6",
  ice: "#5DADE2",
  dragon: "#8E44AD",
  dark: "#34495E",
  fairy: "#F8C6D8",
  normal: "#95A5A6",
  fighting: "#E74C3C",
  flying: "#AED6F1",
  poison: "#8E44AD",
  ground: "#D35400",
  rock: "#7F8C8D",
  bug: "#27AE60",
  ghost: "#6C3483",
  steel: "#BDC3C7",
};

// Update background based on Pokémon type
function updateBackground(pokemon) {
  const mainType = pokemon.types[0].type.name;
  const backgroundColor = typeColors[mainType] || "#f2f2f2";
  document.body.style.backgroundColor = backgroundColor;
}

// Fetch a Single Pokémon by ID and update background
async function fetchPokemonById(pokemonId) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemon = await response.json();
    displayPokemon(pokemon);
    updateBackground(pokemon);
    pokemonSearch.value = pokemonId;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
}

// Display a Single Pokémon
function displayPokemon(pokemon) {
  pokedexImage.innerHTML = "";

  // Create Pokémon Image Element
  const imgElement = document.createElement("img");
  imgElement.src = pokemon.sprites.front_default;
  imgElement.alt = pokemon.name;
  imgElement.title = pokemon.name;

  // Create Pokémon Name Element with capitalized name
  const nameElement = document.createElement("h2");
  const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  nameElement.textContent = `${capitalizedName} (#${pokemon.id})`;

  // Append Elements to the Container
  pokedexImage.appendChild(imgElement);
  pokedexImage.appendChild(nameElement);
}

// Maximum Pokémon ID (Gen 1)
const MAX_POKEMON_ID = 151;

// Handle D-pad button clicks
upButton.addEventListener("click", () => {
  if (currentPokemonId + 10 <= MAX_POKEMON_ID) {
    currentPokemonId += 10;
    fetchPokemonById(currentPokemonId);
  }
});

downButton.addEventListener("click", () => {
  if (currentPokemonId - 10 >= 1) {
    currentPokemonId -= 10;
    fetchPokemonById(currentPokemonId);
  }
});

leftButton.addEventListener("click", () => {
  if (currentPokemonId > 1) {
    currentPokemonId--;
    fetchPokemonById(currentPokemonId);
  }
});

rightButton.addEventListener("click", () => {
  if (currentPokemonId < MAX_POKEMON_ID) {
    currentPokemonId++;
    fetchPokemonById(currentPokemonId);
  }
});

// Initial Fetch
fetchPokemonById(currentPokemonId);