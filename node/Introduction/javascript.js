let users = ['user 1', 'user 2'];                   // Tableau indexé
console.log(users[0]);

let map = new Map();
map.set('name', 'John')
.set('lastname', 'Doe')
.set('age', 25);

console.log("Bonjour %s %s", map.get('name'), map.get('lastname'));

console.log ("Map size: %d", map.size);

for (value of map) {
    console.log(value);
};


for (let [key, value] of map.entries() ){
    console.log("Key = %s; Value = %s", key, value);
};


// ---------------------------------------------------

let set = new Set();

set.add('Hello').add('World').add('Hello').add('Goodbye');

console.log("Set size: %d", set.size);
console.log(set);

if ( set.has('Goodbye')){
    set.delete('Hello');
};

for (let value of set.values()){
    console.log(`Value = ${value}`);
};


console.log("-------------------------------------------------------------------------------------------------------");
console.log("Association par destructuration");

let data = [1,2,3];

let [a,b,c] = data;

console.log("a = %d; b = %d; c = %d", a, b ,c);

[c,b,a] = [a,b,c];

console.log("a = %d; b = %d; c = %d", a, b, c);

