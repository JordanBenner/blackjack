

var numbers = ['Ace', '2','3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

var deck = [
  {}
];

for (let i=0; i < suits.length; i++) {
  for (let j=0; j < numbers.length; j++) {
    //add a card to the deck
    deck.push({suit: suits[i], points: j + 1, card_number: numbers[j]});
  }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

deck = shuffleArray(deck);

$(document).ready(function(){

  $('#deal-button').click(function(){
    var card = deck.pop();
    $('#dealer-hand').append(`<img src='images/${card.card_number}_of_${card.suit}.png'>`);
  });

  $('#hit-button').click(function(){
    var card = deck.pop();
    $('#player-hand').append(`<img src='images/${card.card_number}_of_${card.suit}.png'>`);
  });


  });
