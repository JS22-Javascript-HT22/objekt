const pokemon = {
    name: 'Charmander',
    type: 'Fire',
    cute: true,
    getInfo: function() {
        return pokemon.name + ' ' + pokemon.type + ' ' + pokemon.cute;
    }
}

console.log(pokemon);
console.log(pokemon.name);

pokemon.stage = 1;

console.log(pokemon);

console.log(pokemon.getInfo());

let pokemons = ['Charmander', 'Bulbasaur', 'Squirtle'];

for(let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i]);
}

let pokemonsObj = [{ name: 'Charmander ', type: 'Fire' }, { name: 'Bulbasaur ', type: 'Grass' }, 
{ name: 'Squirtle ', type: 'Water' }, { name: 'Pikachu ', type: 'Fire' }];

for (const pokemon of pokemonsObj) {
    console.log(pokemon);
}