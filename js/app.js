


// /*
//  * Create a list that holds all of your cards
//  */
// let cards = Array.from(document.querySelectorAll('.card'));
// let de = document.querySelector('.deck');
// /*
//  * Display the cards on the page
//  *   - shuffle the list of cards using the provided "shuffle" method below
//  *   - loop through each card and create its HTML
//  *   - add each card's HTML to the page
//  */

// function display(array){
//     shuffle(array);
//     for(let card of array){
//         card.classList.toggle('show');
//         de.appendChild(card);
//     }
// }

// // Shuffle function from http://stackoverflow.com/a/2450976
// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex;

//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }

//     return array;
// }


// /*
//  * set up the event listener for a card. If a card is clicked:
//  *  - display the card's symbol (put this functionality in another function that you call from this one)
//  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//  *  - if the list already has another card, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//  */


// var arr = [];

// function respondToTheClick(evt) {
    
//     arr.push(evt.target);
//     if(arr.length === 2){
//         if(arr[1].innerHtml == arr[0].innerHtml){
//             arr[0].classList.toggle('match');
//             arr[1].classList.toggle('match');
//             arr.pop();
//             arr.pop();
//         }
//         else{
//             arr.pop()
//             arr.pop()
//         }
//     }
     
//     toggleCard(evt.target);

// }

// function toggleCard(evtt){
//     evtt.classList.toggle('open');
//     evtt.classList.toggle('show');

// }

// // function checkArray(evti){
// //     arr.push(evti)
// // }


// for( let card of cards){
//     card.addEventListener('click', respondToTheClick);
// }
