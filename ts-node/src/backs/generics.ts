
//?Clase de import, export export default-------------------------
// import { Hero } from './classes/Hero';
//import { Hero as SuperHero } from './classes/Hero';
//import * as HeroClasses from './classes/Hero';
//import powers from './data/powers';     //ya que la exportacion de powers fue default, no se usan llaves para referirnos a powers



// const ironMan = new SuperHero('Iron Man', 1, 55)
// const ironMan = new HeroClasses.Hero('Iron Man', 1, 55)
//console.log(powers);
// const ironMan = new Hero('Iron Man', 1, 55)

// console.log(ironMan);
// console.log(ironMan.power);

//*-------------------------------------------------------------------------------------------------------------------------------//

//?Funciones Genéricas!!------------------------------------------------------------//

import { printObj, genericFunction, genericArrow } from '../generics/generics';
import { Villian } from '../interfaces';
// import { Hero } from './interfaces/hero';
// import { Villian } from './interfaces/villian';

// printObj(123);
// printObj(new Date());
// printObj({a:1, b:2});
// printObj([1,2,3]);
// printObj('string');


// console.log(genericArrow(3.1416).toFixed(2));
// console.log(genericArrow('Hola').toLocaleUpperCase());
// console.log(genericArrow(new Date()).getDate());


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericArrow<Villian>(deadpool).dangerLevel);





