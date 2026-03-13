const pokemonData = [
  {
    id: "#016",
    name: "Pidgey",
    type: ["normal"],
    height: "3M",
    weight: "18KG",
    image: "img/pidgey.png"
  },
  {
    id: "#004",
    name: "Charmander",
    type: ["fire"],
    height: "6M",
    weight: "85KG",
    image: "img/charmander.png"
  },
  {
    id: "#007",
    name: "Squirtle",
    type: ["water"],
    height: "5M",
    weight: "90KG",
    image: "img/squirtle.png"
  }
];

const container = document.getElementById("pokemon-container");

function renderPokemon(pokemonList) {
  container.innerHTML = "";

  pokemonList.forEach((pokemon) => {
    const typeBadges = pokemon.type
      .map(
        (type) => `<span class="type-badge ${type}">${type}</span>`
      )
      .join("");

    const card = `
      <div class="card">
        <img src="${pokemon.image}" alt="${pokemon.name}">
        <p class="number">${pokemon.id}</p>
        <h2 class="name">${pokemon.name}</h2>
        <div class="types">${typeBadges}</div>
        <div class="stats">
          <span>${pokemon.height}</span>
          <span>${pokemon.weight}</span>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}
