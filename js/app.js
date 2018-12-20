//*
 * Create a list that holds all of your cards
 */
let cards = Array.from(document.querySelectorAll('.card'));
let de = document.querySelector('.deck');
let stars = document.querySelector('.stars');
let clockOff = true;
let interval;
let exit = document.querySelector('#exit');
let resetButton = document.querySelector('.restart')
let timer = document.querySelector('.timer');
var arr = [];
let mCounter = 0;
let moves = document.querySelector('.moves');
let matched = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function display(array){
    shuffle(array);
    for(let card of array){
        if(card.classList.contains('show')){
            card.classList.toggle('show');
        }
        if(card.classList.contains('open')){
            card.classList.toggle('open');
        }
        if(card.classList.toggle('match')){
            card.classList.toggle('match');
        }
        card.classList.toggle('show');
        de.appendChild(card);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



function addMove(){
    mCounter +=1;
    moves.innerHTML = mCounter;
}

function respondToTheClick(evt) {
    if(arr.length < 1 && !evt.target.classList.contains('match')){
        arr.push(evt.target);
        toggleCard(evt.target);
        addMove();
        decStars();
    }  
    else if(arr.length < 2 && !evt.target.classList.contains('match')){
        arr.push(evt.target);
        if(arr[0] !== arr[1] && arr[1].parentElement !== arr[0] && arr[0].parentElement !== arr[1]){
            toggleCard(evt.target);
            addMove();
            decStars();
            if(arr[1].innerHTML == arr[0].innerHTML){
                setTimeout(() => {
                    matching(arr[0]);
                    matching(arr[1]);
                    poping(arr);
                    checkGameOver();
                }, 1000);
                
            }    
            else{
                setTimeout(() => {
                    toggleCard(arr[0]);
                    toggleCard(arr[1]);
                    poping(arr);
                }, 1000);
            }
            
        }else{
            arr.pop()
        }
        
    }
    
}

function matching(evtir){
    evtir.classList.toggle('match')
    matched += 1;
}

function toggleCard(evtt){
    evtt.classList.toggle('open');
    evtt.classList.toggle('show');
}

function poping(array){
    array.pop()
    array.pop()
}


function decStars(){
    if(moves.innerHTML == 21 || moves.innerHTML == 25 || moves.innerHTML == 29){
        stars.firstElementChild.remove();
    }
}

function toggleResults(){
    let model = document.querySelector('.model');
    let model_title = document.querySelector('.model_title');
    let model_results = document.querySelector('.model_results');
    model.classList.toggle('hide');
    model_title.classList.toggle('hide');
    model_results.classList.toggle('hide');
}

let timePassed = 0;

function time(){
    interval = setInterval(() => {
        timePassed +=1;
        displayTimer();
    }, 1000)
}

function displayTimer(){
    let minutes = Math.floor(timePassed/60);
    let seconds = timePassed%60;
    if(seconds < 10){
        timer.innerHTML = `${minutes}:0${seconds}`;
    } else{
        timer.innerHTML = `${minutes}:${seconds}`;
    }
}

function stopTimer(){
    clearInterval(interval);
}


function getResults(){
    let modelTime = document.querySelector('#model_time');
    let timer = document.querySelector('.timer').innerHTML;
    let modelMoves = document.querySelector('#model_moves');
    let modelStars = document.querySelector('#model_stars');
    modelMoves.innerHTML = `Moves = ${moves.innerHTML}`
    modelTime.innerHTML = `Time = ${timer}`;
    modelStars.innerHTML = `Stars = ${stars.childElementCount}`;
}

function memorize(){
    setTimeout(() => {
        for(let card of cards){
            if(card.classList.contains('show')){
                card.classList.toggle('show');
            }
        }
    }, 6000);
}

function reset(){
    stopTimer();
    timer.innerHTML = 0;
    timePassed = 0;
    mCounter = 0;
    document.querySelector('.moves').innerHTML = mCounter;
    clockOff = true;
    // displayTimer();
    let aStar = document.createElement('li');
    aStar.innerHTML = '<i class="fa fa-star"></i>';
    if(stars.childElementCount == 1){
        stars.appendChild(aStar);
        stars.appendChild(aStar);
    } else if(stars.childElementCount == 2){
        stars.appendChild(aStar);
    }
    display(cards);
    memorize();
}



function createGame(){
    resetButton.addEventListener('click', reset)
    de.addEventListener('click', evt =>{
        if(evt.target.classList.contains('card') && clockOff ){
            time();
            clockOff = false;
        }
    })
    exit.addEventListener('click', toggleResults)
    for( let card of cards){
        card.addEventListener('click', respondToTheClick);
    }
    display(cards);
    memorize();
}

function checkGameOver(){
    if(matched == 16){
        getResults();
        stopTimer();
        toggleResults();
    }
}

createGame();
