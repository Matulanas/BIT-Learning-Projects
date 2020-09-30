function asiuSkaicius(ratuKiekis){


    return `Ašių skaičius: ${Math.floor(ratuKiekis / 2)}`;

}

console.log(asiuSkaicius(4));
console.log(asiuSkaicius(5));
console.log(asiuSkaicius(6));

console.log('');
console.log('');
console.log('---');
console.log('Didelės mašanos');
console.log('');

/**
 * 
 * @param{}
 * @returns{}
 */
function asiuSkaicius2(ratuKiekis){

    if(ratuKiekis - 4 === 0){
        return '2 Ašys';
    } else if(ratuKiekis > 4){
        const asys = (ratuKiekis - 2) / 4 +1; 
        return `Ašių skaičius ${asys}`;
    }

}

console.log(asiuSkaicius2(4));
console.log(asiuSkaicius2(10));
console.log(asiuSkaicius2(14));
console.log(asiuSkaicius2(18));



console.log('');
console.log('');
console.log('---');
console.log('Eglutė');
console.log('');



function tree(height){
    let snaiges = '*';
    for(let i = 0; i < height; i++){
        console.log(snaiges);
        snaiges += '**';
    }
    console.log('#');
}

console.log(tree(3));
console.log(tree(5));