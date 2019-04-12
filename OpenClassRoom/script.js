
function convertirMotLeet(x){
    var messageLeet = "";
    for (var i = 0; i < x.length; i++) {
        if (x[i].toLowerCase() === "l") { messageLeet += "1"; }
        else if (x[i].toLowerCase() === "e") { messageLeet += "3"; }
        else if (x[i].toLowerCase() === "a") { messageLeet += "4"; }
        else if (x[i].toLowerCase() === "t") { messageLeet += "7"; }
        else if (x[i].toLowerCase() === "s") { messageLeet += "5"; }
        else if (x[i].toLowerCase() === "o") { messageLeet += "0"; }
        else { messageLeet += x[i]; }
}
    return messageLeet;
}


console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"