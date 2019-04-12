import Perso from './perso.js';
import Mob from './mob.js';
import Item from './item.js';
import dice from './dice.js';

const squand = new Perso(1, 'Squand', 150, 0, 50, 45, 45);
const csq = new Item('Casque', 14, 10 ,10 ,10);

console.log(csq.decrire());

