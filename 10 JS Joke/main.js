/**
 * 
 * Kiek pokštų spės papasakoti?
 */
function joke(jokesList, brake, showtime){
    let jokesCount = 0;
    let jokesIndex = 0;
    let time = 0;

    while (time < showtime){
        time += jokesList[jokesIndex];
        console.log(jokesList[jokesIndex], time)

        time += brake;
        jokesCount++;
        jokesIndex++;

        if(jokesIndex === jokesList.length){
            jokesIndex = 0;
        }
    }
    return jokesCount;
}

const jonasJokes = [11, 3, 2, 4, 2, 5];      //kiek minučių trunka kiekvienas pokštas
const timeout = 1;                           //laikas tarp pokštų
const showLength = 60;                       //pasirodymo trukmė

console.log(joke(jonasJokes, timeout, showLength))

const anosJokes = [7, 5, 8, 4, 9];
const anosShow = 45;

// console.log(joke(anosJokes, timeout, anosShow))




// anekdotai = [4, 9, 14];
// pertrauka = 1;
// showtime = 1450;

// set = 30

// repeat = showtime / set

// pilnuPasirodymuLaikas = set * Math.floor(repeat);

// nepanaudotasLaikas = showtime - pilnuPasirodymuLaikas;








