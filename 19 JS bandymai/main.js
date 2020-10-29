const people = [
    {
        name: "Pirmas",
        age: 4,
        eyeColor: "blue"
    },
    {
        name: "Antras",
        age: 100,
        eyeColor: "brown"
    },
    {
        name: "Trecias",
        age: 50,
        eyeColor: "blue"
    },
    {
        name: "Ketvirtas",
        age: 44,
        eyeColor: "blue"
    },
    {
        name: "Penktas",
        age: 14,
        eyeColor: "brown"
    },
    {
        name: "Sestas",
        age: 1,
        eyeColor: "blue",
        luckyNumber: "15"
    },
];


// ***  forEach  ***
// people.forEach((person, i) => {
//     console.log(i);
//     console.log(person);
// });


// ***  Map  ***
// const updateMapPeople = people.map((person, index) => {
//     console.log(index);
//     person.luckyNumber = Math.floor(Math.random() * 1000);
//     person.eyeColor = null;
//     return person, index;
// });
// console.log(updateMapPeople);

// const array1 = [1.333300,-5.555,9.8,8];
// const map1 = array1.map(x => x < 0 ? 0 : Math.floor(x));
// console.log(array1);
// console.log(map1);


// ***  Filter  ***
// const noBrownEyes = people.filter(person => {
//     return person.eyeColor !== 'brown' && person.age > 30;
// });
// console.log(noBrownEyes);


// ***  Sort    ***
// const texts = ['fdsfsd', 'sd', '6', 'ff', 'aa', 'ru', '55'];
// const textMinMax = texts.sort();
// console.log(textMinMax);

// const numbers = [7, -5, 11, 5555, -95, 1, 99.99, 52];
// const numMinMax = [...numbers].sort((a, b) => a - b); // naudojam rūšiavimui a-b, tik taip išdėlioja nuo mažiausio
// const numMaxMin = [...numbers].sort((a, b) => b - a);
// console.log(numMinMax);
// console.log(numMaxMin);


// ***  ... SPREAD OPERATOR    ***
// const numbersCopy = [...numbers];
// numbers[0] = 'asasassaas';
// console.log(numbersCopy);
// console.log(numbers);

// const suo = {
//     veisle: 'Lietuvos lenciuginis',
//     spalva: 'ruda',
//     vardas: 'Rexas'
// }

// const suo2 = {...suo, vardas: 'Maxas', lytis: true};
// suo.spalva = 'margas';
// console.log(suo);
// console.log(suo2);

// function sum(...a){
//     let suma = 0;
//     for(let num of a){
//         suma += num;
//     }
//     return suma;
// }
// console.log(sum(4,8,9,12,46));
// console.log(sum(4,8,9));
// console.log(sum(1));


// ***   Reduce   ***

// const numbers = [7, -5, 11, 55, -95, 1, 99.99, 52];

// const reduceSum = numbers.reduce((total, num) => total + num, 0);
// console.log(reduceSum);

// const peopleAgeSum = people.reduce((total, person) => total + person.age, 0);
// console.log(peopleAgeSum);

// const reduceTexts = texts.reduce((sentence, word) => {
//     if(sentence === ''){
//         return sentence + word;
//     }
//         return sentence + ', ' + word }, '');
// console.log(reduceTexts);