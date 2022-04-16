// import { getPokemon } from "./generics/getPokemon";




// getPokemon(6)
//     .then(pokemon => console.log(pokemon.name))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Fin de getPokemon'))
// ;

//*------------------------------------------------------------------------------------------------------------------------------------//
//*Decoradores:

import { Pokemon } from './decorators/poke-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Mewtwo'

// console.log(charmander.savePokemonToDb(50));
// charmander.savePokemonToDb(-3);

charmander.publicApi = 'Leo Hammett';
console.log(charmander);

