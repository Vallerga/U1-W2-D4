const starWarsCharacters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "277",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
    },
    {
        name: "R2-D2",
        height: "96",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
    },
    {
        name: "Owen Lars",
        height: "178",
        mass: "120",
        hair_color: "brown, grey",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "52BBY",
        gender: "male",
    },
    {
        name: "Beru Whitesun lars",
        height: "165",
        mass: "75",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "47BBY",
        gender: "female",
    },
    {
        name: "R5-D4",
        height: "97",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, red",
        eye_color: "red",
        birth_year: "unknown",
        gender: "n/a",
    },
    {
        name: "Biggs Darklighter",
        height: "183",
        mass: "84",
        hair_color: "black",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "24BBY",
        gender: "male",
    },
    {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
    },
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/
console.log("1st ex");

let characters = [];
console.log(characters);

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

console.log("2nd ex");
for (let i = 0; i < starWarsCharacters.length; i++) {
    characters[i] = starWarsCharacters[i].name;
    console.log(characters[i]);
}

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e inserisci solo oggetti di personaggi femminili con questa struttura di esempio: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/

console.log("3rd ex");
let femaleCharachters = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
    let istantarray = starWarsCharacters[i];
    if (starWarsCharacters[i].gender === "female") {
        delete istantarray.height;
        delete istantarray.mass;
        delete istantarray.skin_color;
        delete istantarray.birth_year;
        delete istantarray.gender;
        femaleCharachters.push(istantarray);
    }
}
console.log(femaleCharachters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, blue-gray.
  ognuna di queste proprietà contiene un array vuoto
*/

console.log("4th ex");
let propertybugged = "blue-gray";
const eyeColor = {
    blue: [],
    yellow: [],
    brown: [],
    red: [],
    [propertybugged]: [],
};

console.log(eyeColor);

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente creato.
  Utilizza uno switch statement per determinare in quale proprietà inserire il personaggio
*/

console.log("5th ex");
const eyeColorArray = Object.keys(eyeColor);
for (let j = 0; j < eyeColorArray.length; j++) {
    for (let i = 0; i < starWarsCharacters.length; i++) {
        switch (starWarsCharacters[i].eye_color) {
            case "blue":
                eyeColor.blue = starWarsCharacters[i];
                break;
            case "yellow":
                eyeColor.yellow = starWarsCharacters[i];
                break;
            case "brown":
                eyeColor.brown = starWarsCharacters[i];
                break;
            case "red":
                eyeColor.red = starWarsCharacters[i];
                break;
            case "blue-gray":
                eyeColor["blue-gray"].push(starWarsCharacters[i]);
                break;
            default:
                console.log("nessun colore adatto");
        }
    }
}
console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
*/

console.log("6th ex");
let totalMass = 0;
let z = 0;
starWarsCharacters[1].mass = 0;
while (z < 10) {
    if (typeof +starWarsCharacters[z].mass !== NaN) {
        totalMass += +starWarsCharacters[z].mass;
        z++;
    }
}
console.log(totalMass);

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

console.log("7th ex");

switch (true) {
    case totalMass < 500:
        console.log("Ship is under loaded");
        break;
    case totalMass >= 500 && totalMass < 700:
        console.log("Ship is half loaded");
        break;
    case totalMass > 700 && totalMass < 900:
        console.log("Warning: Load is over 700");
        break;
    case totalMass > 900 && totalMass < 1000:
        console.log("Critical Load: Over 900");
        break;
    case totalMass > 1000:
        console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
        break;
    default:
        console.log("");
}

/* ESERCIZIO 8

Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la riassegnazione del valore corrispondente)
*/

console.log("8th ex");
let robotCharachters = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
    robotCharachters = starWarsCharacters[1];
    if (starWarsCharacters[i].gender === "n/a") {
        robotCharachters.gender = "robot";
        console.log(robotCharachters);
    }
}

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto, crea un console.log() per controllare la proprietà length di "characters" prima e dopo l'operazione
*/
console.log("EXTRA 9th ex");
// console.log(characters);
console.log(characters);
for (i = 0; i < 10; i++) {
    if (characters[i] == femaleCharachters[0].name || characters[i] == femaleCharachters[1].name) {
        characters.splice(i, 1);
    }
}
console.log(characters);
console.log("lunghezza dell'array adesso: ",characters.length);


// console.log(characters);

// EXTRA ESERCIZIO 10

// Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
// let randomcoso;
// let randomProperty = function (starWarsCharacters) {
//   let keys = Object.keys(starWarsCharacters);
//   console.log(keys[ keys.length * Math.random()]);
// }
// randomProperty()
// console.log(randomcoso);
console.log("EXTRA 10th ex")

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let index = getRandomInt(starWarsCharacters.length)
// let index = starWarsCharacters.lenght * Math.random();
console.log("numero generato: ",index)
let arrayContent = Object.entries(starWarsCharacters);
// console.log(arrayContent)

console.log(starWarsCharacters[index])
