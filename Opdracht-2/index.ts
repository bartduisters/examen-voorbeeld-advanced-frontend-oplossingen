// Expliciete return
const doei = (naam) => {
  return `Doei ${naam}!`;
};
// Impliciete return
const hallo = (naam) => `Hallo ${naam}!`;
const zegHallo = (naam) => console.log(hallo(naam));

function optellen(a, b, c) {
  return a + b + c;
}

// Instinker - goed opletten!
function vermenigvuldigen(a, b, c) {
  a * b * c;
}

console.log(doei("John Duck")); // Doei John Duck!
console.log(hallo("John Duck")); // Hallo John Duck!
zegHallo("John Duck"); // Hallo John Duck!
console.log(optellen(1, 2, 3)); // 6
console.log(vermenigvuldigen(1, 2, 3)); // undefined
console.log('\n'); // Dit print een 'enter' - een lege regel

const pokemon = [];

const bulbasaur = {
  name: "Bulbasaur",
  type: "Grass",
  hp: 45,
  attack: 49,
  defense: 49,
  specialAttack: 65,
  specialDefense: 65,
  speed: 45,
};

const charmander = {
  name: "Charmander",
  type: "Fire",
  hp: 39,
  attack: 52,
  defense: 43,
  specialAttack: 60,
  specialDefense: 50,
  speed: 65,
};

const squirtle = {
  name: "Squirtle",
  type: "Water",
  hp: 44,
  attack: 48,
  defense: 65,
  specialAttack: 50,
  specialDefense: 64,
  speed: 43,
};

pokemon.push(bulbasaur);
pokemon.push(charmander);
pokemon.push(squirtle);

const printPokemon = (pokemon) => {
  pokemon.forEach((pokemon) => {
    console.log(`Name: ${pokemon.name}`);
    console.log(`Type: ${pokemon.type}`);
    console.log(`HP: ${pokemon.hp}`);
    console.log(`Attack: ${pokemon.attack}`);
    console.log(`Defense: ${pokemon.defense}`);
    console.log(`Special Attack: ${pokemon.specialAttack}`);
    console.log(`Special Defense: ${pokemon.specialDefense}`);
    console.log(`Speed: ${pokemon.speed}`);
    console.log(`\n`);
  })
}

printPokemon(pokemon);