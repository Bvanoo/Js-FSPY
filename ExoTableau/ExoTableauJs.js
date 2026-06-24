
const fruits = ["pomme","banane","fraise"]
console.table(fruits);
console.log(fruits);
for(fruit of fruits){
    console.log(fruit);
}

const indFraise = fruits.indexOf("fraise");
console.log(indFraise);

const fruits5 = fruits.filter((fruit) => fruit.length === 5);
console.log(fruits5);

const fruitsMaj = fruits.map((fruit) => fruit.toLocaleUpperCase());
console.table(fruitsMaj);

const personnes = [
    {prenom : "jean", nom : "dupont", age : 42},
    {prenom : "jeanot", nom : "smith", age : 26}
];
const personne = {prenom : "jane", nom : "doe", age : 24}

personnes.push(personne);

console.table(personnes);

personnes.shift();
console.table(personnes);

personnes.unshift({prenom:"Sonic", nom: "The Hedgedog", age : 12})
console.table(personnes);

personnes.sort((a,b) => a.age - b.age);
console.table(personnes)

personnes.push({prenom : "Gerard", nom : "Eggman", age : 82})
console.table(personnes);

personnes.forEach((pers) =>{
    console.log(pers)
})

const removed = personnes.splice(1,personnes.length-2)
console.table(personnes);