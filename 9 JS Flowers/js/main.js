/**
 * Vazonų kiekis: 20
 * Pradinis gėlių kiekis: 1
 * dauginasi: 1 gėlė kasmet užaugina po 1 vaiką
 * 
 * 
 * Per kiek metų užauginsime tiek gėlių, jog būtų užimti visi vazonai?
 */

function flowers(totalPotCount, initialFlowers, childrenGrowRate){
    let flowersCount = initialFlowers;
    let year = 1;


    while (flowersCount < totalPotCount) {
        flowersCount = flowersCount + flowersCount * childrenGrowRate;
        year++;
        console.log(year + '-' + flowersCount)
    }

    return year;
}


console.log(flowers(200,7,2));