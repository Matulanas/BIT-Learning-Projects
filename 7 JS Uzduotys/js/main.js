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

const sarasas = ['Kas', 'Kur', 'Kada'];
console.log('Pirmas sąrašo kintamasis: (' + sarasas[0] + ') jo ilgis: ' + sarasas[0].length + ' simboliai');
console.log('Antras sąrašo kintamasis: (' + sarasas[1] + ') jo ilgis: ' + sarasas[1].length + ' simboliai');
console.log('Trečias sąrašo kintamasis: (' + sarasas[2] + ') jo ilgis: ' + sarasas[2].length + ' simboliai');

if (sarasas[0].length == sarasas[1].length && sarasas[0].length == sarasas[2].length) {
    console.log('Visi trys yra lygūs');
} 
else if(sarasas[0].length > sarasas[1].length && sarasas[0].length > sarasas[2].length) 
{
    console.log('Pirmas ilgiausias');
}
else if(sarasas[0].length < sarasas[1].length && sarasas[1].length > sarasas[2].length){
    console.log('Antras ilgiausias');
}
else 
{
    console.log('Trečias yra ilgiausias');
}