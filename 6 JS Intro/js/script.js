"use strict"; // griežta logika 

// const - konstanta - nesikeičiantis kintamasis
// let - konstanta - galimybė overaidinti


// paprasti: +, -, *, /
// increment: ++ (before or after)
// decrement: -- (before or after)
// update: +=, -=, *=, /=


const day = 'dev';

switch (day) {
    case 'pir':
        console.log('1')
        break;
    case 'ant':
        console.log('21')
        break;
    case 'tre':
        console.log('3')
        break;
    case 'ket':
        console.log('4')
        break;
    case 'pen':
        console.log('5')
        break;
    case 'ses':
        console.log('6')
        break;
    case 'sek':
        console.log('7')
        break;
    default:
        console.log('Nou nou')
        break;
}
console.log('-----');

const stop = 'geniu';

switch (stop){
    case 'Naujoji Vilnia':
        console.log('Naujoji Vilnia');
        break;
    case 'Geniu':
        console.log('Geniu');
    case 'Rudens':
        console.log('Rudens');
    case 'Karaliaus Mindaugo':
        console.log('Karaliaus Mindaugo');
    case 'Zaliasis Tiltas':
        console.log('Zaliasis Tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');
    case 'Tuskulenu':
        console.log('Tuskulenu');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Rudens2':
        console.log('Rudens2');
    case 'Tremtiniu':
        console.log('Tremtiniu');

    default:
        console.log('Ar turi mabylka?');
        break;
}

console.log('-----');
console.log('-----');
console.log('-----');
console.log('-----');
console.log("FOR");


const sayBye = 'Ate';

const count = 6;

for (let i=0; i<count; i++) {
    console.log(sayBye);
}

console.log('---');

// 0 - 4    - 10
// 0 - 100    - 5050
// 574 - 815    - didelis teigiamas
// -70 - 30     - mažas neigiamas
// -50 - 50     - 0
// 0 - 0    - 0

const nuo = 0;
const iki = 5;
let sum = 0;
for(let i=0; i <= 5; i++){
    sum = sum + i;    
}
const rez = `Suma nuo ${nuo} iki ${iki} yra ${sum}`;
console.log(rez);

console.log('----');

let sum2 = 0;
for(let i=0; i<=100; i++){
    sum2 = sum2 + i;
}
console.log(sum2);

console.log('----');

let sum3 = 0;

// for(i = 574)