"use strict";

const skaiciai = [22,1, 0, 66, 88];
console.log('Iš array list (' + skaiciai + ') padarius šias funkcijas: 1-2+3-4+5');
let rezultatas = 0;

rezultatas = skaiciai[0] - skaiciai[1] + skaiciai[2] - skaiciai[3] + skaiciai[4];

if (rezultatas >= 0) {
    console.log('Rezultatas Teigiamas: ' + rezultatas);
} else {
    console.log('Rezultatas Neigiamas: ' + rezultatas);
}


console.log('----------------');
console.log('----------------');
console.log('----------------');
console.log('Skaičių kintamųjų palyginimas:');
console.log('--');

const pirmassk = 2;
const antrassk = 2;
console.log('Pirmas skaičius: ' + pirmassk);
console.log('Antras skaičius: ' + antrassk);

if (pirmassk == antrassk){
    console.log('Jie yra lygūs');
} 
else if (pirmassk > antrassk){
    console.log('Pirmas didesnis');
}
else 
{
    console.log('Antras didesnis');
}


console.log('----------------');
console.log('----------------');
console.log('----------------');
console.log('Tekstų kintamųjų palyginimas:');
console.log('--');

const pirmast = "asdfa";
const antrast = "asdfg";
console.log('Pirmas tekstinis kintamasis: ' + pirmast);
console.log('Antras tekstinis kintamasis: ' + antrast);

if (pirmast.length == antrast.length){
    console.log('Jie yra lygūs');
} 
else if (pirmast.length > antrast.length){
    console.log('Pirmas ilgesnis');
}
else 
{
    console.log('Antras ilgesnis');
}


console.log('----------------');
console.log('----------------');
console.log('----------------');
console.log('Tekstų kintamųjų palyginimas:');
console.log('--');

const sarasas = ['aaa', 'aaa', 'aaa'];
console.log(sarasas);
console.log('Pirmas sąrašo kintamasis: (' + sarasas[0] + ') jo ilgis: ' + sarasas[0].length + ' simboliai');
console.log('Antras sąrašo kintamasis: (' + sarasas[1] + ') jo ilgis: ' + sarasas[1].length + ' simboliai');
console.log('Trečias sąrašo kintamasis: (' + sarasas[2] + ') jo ilgis: ' + sarasas[2].length + ' simboliai');

if (sarasas[0].length == sarasas[1].length && sarasas[0].length == sarasas[2].length && sarasas[1].length == sarasas[2].length) {
    console.log('Visi trys yra lygūs');
} 
else if(sarasas[0].length > sarasas[1].length && sarasas[0].length > sarasas[2].length) 
{
    console.log('Pirmas ilgiausias');
}
else  if(sarasas[0].length < sarasas[1].length && sarasas[1].length > sarasas[2].length){
    console.log('Antras ilgiausias');
}
else 
{
    console.log('Trečias yra ilgiausias');
}

console.log('--');

const nr1 = 1;
const nr2 = 2;
const nr3 = 3;

if((nr1 + nr2) == nr3 && (1 + 2) == 3){
    console.log('Pomadoras');
} else {
    console.log('ne Pomadoras');
}

console.log('----------------');
console.log('----------------');
console.log('----------------');
console.log('CIKLAI');
console.log('--');
console.log('');

let dalinasi3 = 0;
let dalinasi4 = 0;
let dalinasi5 = 0;


console.log('Ciklas: 0 - 11');
const cikloSk = 11;
for (let i=0; i <= cikloSk; i++){
    if ((i % 3) == 0){
        dalinasi3++;
    } 
}
console.log(`Cikle 0-11 be liekanos skaičius 3 dalinasi: ${dalinasi3} kartus`);


console.log('Ciklas: 8 - 31');
const cikloSk2 = 31;
for (let i=8; i <= cikloSk2; i++){
    if (i != 0 && (i % 3) == 0){
        dalinasi3++;
    } 
}
console.log(`Cikle 8-31 be liekanos skaičius 3 dalinasi: ${dalinasi3} kartus`);


console.log('Ciklas: -18 - 18');
const cikloSk3 = 18;
for (let i=-18; i <= cikloSk3; i++){
    if (i != 0 && (i % 3) == 0){
        dalinasi3++;
    } 
}
console.log(`Cikle -18-18 be liekanos skaičius 3 dalinasi: ${dalinasi3} kartus`);


console.log('----------------');
console.log('----------------');
console.log('----------------');
console.log('Funkcijos');
console.log('--');
console.log('');

console.log('Daugyba');

const skaicius1 = 3;
const skaicius2 = 5;
function daugybosf(x, y, daugyba){
    daugyba = skaicius1 * skaicius2;
    return daugyba;
}
console.log(daugybosf(skaicius1,skaicius2));


console.log('');
console.log('--');
console.log('');

console.log('Skaitmenų kiekis skaičiuje');
console.log('');

const sk = 'a';
console.log(`Pateikta reikšmė yra: ${sk}`);
function kiekisSkaiciuje(x){
    x = sk;
    if (!isNaN(x)){
        return `Pateiktos reikšmės simbolių skaičius yra: ${x.length}`;
    } else {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
}
console.log(kiekisSkaiciuje());

console.log('');
console.log('Didžiausias Skaičius saraše');
console.log('');



function didziausiasSkaiciu(){

    const bandymas = [0];

    if (Array.isArray(bandymas)){

        if (bandymas.length > 0) {
            console.log('tesiame');
        } else {
            console.log('Pateiktas sąrašas negali būti tuščias.');
        }
    } else {
    console.log('Pateikta netinkamo tipo reikšmė.');
    } 
    
    // // return;
}
console.log(didziausiasSkaiciu());