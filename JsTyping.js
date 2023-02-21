
// catch selectors
const lvlSpan = document.querySelector('.instructions .lvl');
const secondsSpan = document.querySelector('.instructions .time');
const startGame = document.querySelector('.container .start');
const word = document.querySelector('.container .word');
const input = document.querySelector('.container input');
const nextWords = document.querySelector('.container .nextWords');
const control = document.querySelector('.container .control');
const timeLeft = document.querySelector('.container .control .one .lost');
const score = document.querySelector('.container .control .two .score');
const totalScore = document.querySelector('.container .control .two .total');
const result = document.querySelector('.container .result');




let selectWords = [
    'Republican',
    'require',
    'research',
    'resource',
    'respond',
    'response',
    'responsibility',
    'behind',
    'believe',
    'benefit',
    'best',
    'better',
    'between',
    'beyond',
    'represent',
    'attack',
    'attention',
    'attorney',
    'audience',
    'author',
    'authority',
    'available',
    'behavior',
]


// set levelsSeconds
let lvls = {
    "Easy": 6,
    "Normal": 4,
    "Hard": 2,
}

// set default
let defaultLvl = 'Normal';
let defaultSec = lvls[defaultLvl];

// set the lvl and seconds and score
lvlSpan.innerHTML = defaultLvl;
secondsSpan.innerHTML = defaultSec;
timeLeft.innerHTML = defaultSec;
totalScore.innerHTML = selectWords.length;

// disable the paste event
input.onpaste = function () {
    return false;
}

// generate the word
startGame.addEventListener('click', function () {
    this.remove();
    input.focus();
    //generate function
    genWords();
})

function genWords() {
    // get a words using math object
    let randomWord = selectWords[Math.floor(Math.random() * selectWords.length)];
    // get index of the randomword
    let indexWord = selectWords.indexOf(randomWord);
    //remove the indexWord from the list
    selectWords.splice(indexWord, 1);
    // clean the nextWords
    nextWords.innerHTML = '';
    // put the randomWord to the word
    word.innerHTML = randomWord;
    // create a div and put it in the nexTwords
    for (i = 0; i < selectWords.length; i++) {
        let divCreated = document.createElement('div');
        let divText = document.createTextNode(selectWords[i]);
        divCreated.appendChild(divText);
        nextWords.appendChild(divCreated);
    };
    // start the game function
    startPlay();
}

function startPlay() {
    timeLeft.innerHTML = defaultSec;
    let start = setInterval(() => {
        //minless the timeleft
        timeLeft.innerHTML--;
        if (timeLeft.innerHTML == "0") {
            //stop the counting in 0
            clearInterval(start);
            // compare the word
            if (word.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                //clear the input field
                input.value = '';
                //add to the score
                score.innerHTML++;

                //continue the genWords
                if (selectWords.length > 0) {
                    genWords();
                } else {
                    result.innerHTML = '';
                    let spanGood = document.createElement('span');
                    let spanGtext = document.createTextNode('rak mqowd');
                    spanGood.className = 'good';
                    spanGood.appendChild(spanGtext);
                    result.appendChild(spanGtext);
                    // clear the nextWords field
                    nextWords.remove();
                    //clear the word field
                    word.innerHTML = '';
                }
            } else {
                result.innerHTML = '';
                let spanBad = document.createElement('span');
                let spanBtext = document.createTextNode('Yalah ghayrha');
                spanBad.className = 'bad';
                spanBad.appendChild(spanBtext);
                result.appendChild(spanBad);
            }
        }
    }, 1000)

}









