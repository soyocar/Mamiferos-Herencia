import { Mamifero } from "./mamifero";
import { Carnivoro } from "./carnivoro";
import { Herbivoro } from "./herbivoro";
import { Omnivoro } from "./omnivoro";

let mamifero = new Mamifero('placentario',100,true,4);
let tigre = new Carnivoro('placentario',150,true,4,'mediano');
let vaca = new Herbivoro('placentarios',200,true,4,'grande');
let cerdo = new Omnivoro('placentario', 10, true, 14,'chico');

console.log('---Alimentacion del mamifero---');
mamifero.comer();

console.log('---Alimentacion de carnivoro---');
tigre.comer();

console.log('--Alimentacon de los herbivoros--');
vaca.comer();

console.log('--Alimentacion de los omnivoros--');
cerdo.comer();

