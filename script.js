const pokemonData = [
  {
    id: "#016",
    bgNumber: "#016",
    name: "PIDGEY",
    types: ["normal", "flying"],
    height: "3M",
    weight: "18KG",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png"
  },
  {
    id: "#004",
    bgNumber: "#004",
    name: "CHARMANDER",
    types: ["fire"],
    height: "6M",
    weight: "85KG",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
    id: "#007",
    bgNumber: "#007",
    name: "SQUIRTLE",
    types: ["water"],
    height: "5M",
    weight: "90KG",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  }
];

const container = document.getElementById("pokemon-container");
const buttons = document.querySelectorAll(".filter-btn");

function createTypePills(types) {
  return types
    .map((type) => `<span class="type-pill ${type}">${type.toUpperCase()}</span>`)
    .join("");
}

function renderPokemon(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p class="empty-state">No Pokémon found.</p>`;
    return;
  }

  list.forEach((pokemon) => {
    const card = `
      <div class="card-shell">
        <article class="card">
          <div class="bg-number">${pokemon.bgNumber}</div>

          <img
            class="pokemon-image"
            src="${pokemon.image}"
            alt="${pokemon.name}"
          />

          <div class="id-name-row">
            <span class="id-badge">${pokemon.id}</span>
            <h2 class="name">${pokemon.name}</h2>
          </div>

          <div class="types">
            ${createTypePills(pokemon.types)}
          </div>

          <div class="stats">
            <span class="stat-pill">${pokemon.height}</span>
            <span class="stat-pill">${pokemon.weight}</span>
          </div>
        </article>
      </div>
    `;

    container.innerHTML += card;
  });
}

function setActiveButton(selectedType) {
  buttons.forEach((button) => {
    if (button.dataset.type === selectedType) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedType = button.dataset.type;

    setActiveButton(selectedType);

    if (selectedType === "all") {
      container.innerHTML = "";
      return;
    }

    const filteredPokemon = pokemonData.filter((pokemon) =>
      pokemon.types.includes(selectedType)
    );

    renderPokemon(filteredPokemon);
  });
});

// starting screen like the slides: buttons only, no card shown
container.innerHTML = "";
