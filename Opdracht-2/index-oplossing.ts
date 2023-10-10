// Expliciete return
const doei = (naam: string): string => {
  return `Doei ${naam}!`;
};

// Impliciete return
const hallo = (naam: string): string => `Hallo ${naam}!`;

const zegHallo = (naam: string): void => console.log(hallo(naam));

function optellen(a: number, b: number, c: number): number {
  return a + b + c;
}

// Instinker - goed opletten!
function vermenigvuldigen(a: number, b: number, c: number): void {
  const result = a * b * c;
}

console.log(doei("John Duck")); // Doei John Duck!
console.log(hallo("John Duck")); // Hallo John Duck!
zegHallo("John Duck"); // Hallo John Duck!
console.log(optellen(1, 2, 3)); // 6
vermenigvuldigen(1, 2, 3);

console.log('\n'); // Dit print een 'enter' - een lege regel

interface Pokemon {
  name: string;
  type: string;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

const pokemon: Array<Pokemon> = [];

const bulbasaur: Pokemon = {
  name: "Bulbasaur",
  type: "Grass",
  hp: 45,
  attack: 49,
  defense: 49,
  specialAttack: 65,
  specialDefense: 65,
  speed: 45,
};

const charmander: Pokemon = {
  name: "Charmander",
  type: "Fire",
  hp: 39,
  attack: 52,
  defense: 43,
  specialAttack: 60,
  specialDefense: 50,
  speed: 65,
};

const squirtle: Pokemon = {
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

const printPokemon = (pokemon: Pokemon): void => {
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