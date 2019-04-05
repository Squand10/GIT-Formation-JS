const mod = require ('./module');
const dawan = require('@tonno/dawan');

import {User} from "./classe/User";

console.log (mod.bonjour());

console.log (mod.aurevoir());


 dawan.Saluer();
 dawan.Bye();

 console.log(dawan.allUser());



let user = new User("John");

console.log("Hello %s", user.name);