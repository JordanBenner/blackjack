var numbers = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
var deck = [];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    //add a card to the deck
    deck.push({
      suit: suits[i],
      point: j + 1,
      card_number: numbers[j]
    });
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

$(document).ready(function() {

  function getCardImageUrl(card) {
    var cardName;
    if (card.point === 1) {
      cardName = 'ace';
    } else if (card.point === 11) {
      cardName = 'jack';
    } else if (card.point === 12) {
      cardName = 'queen';
    } else if (card.point === 13) {
      cardName = 'king';
    } else {
      cardName = card.point;
    }
    return 'images/' + cardName + '_of_' + card.suit + '.png';
  }

  $('#deal-button').click(function() {
    var card1 = deck.pop();
    var card2 = deck.pop();
    dealerHand = [card1, card2];
    var img1 = getCardImageUrl(card1);
    var img2 = getCardImageUrl(card2);
    //$('#dealer-hand').append(`<img src='images/${card.card_number}_of_${card.suit}.png'>`);
    $('#dealer-hand').append(`<img src='${img1}'>`);
      $('#dealer-hand').append(`<img src='${img2}'>`);
    // console.log('#player-hand', playerHand);
    // console.log('#dealer-hand', dealerHand);
  });

  $('#hit-button').click(function() {
    var card = deck.pop();
    $('#player-hand').append(`<img src='images/${card.card_number}_of_${card.suit}.png'>`);
  });

  $('#player-hand').click(function(){
    var card1 = deck.pop();
    var card2 = deck.pop();
    playerHand = [card1, card2];
    var img1 = getCardImageUrl(card1);
    var img2 = getCardImageUrl(card2);
    //$('#player-hand').append(`<img src='images/${card.card_number}_of_${card.suit}.png'>`);
    $('#player-hand-hand').append(`<img src='${img1}'>`);
      $('#player-hand').append(`<img src='${img2}'>`);

  })

  $('#stand-button').click(function() {

  });



});
