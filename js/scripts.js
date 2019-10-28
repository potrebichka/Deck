$(document).ready(function() {
  var suits = ['clubs', 'hearts', 'diamonds', 'spades'];

  var values = ['ace'];
  for (var i=2; i<=10; i++) {
    values.push(i)
  };
  values.push('jack', 'queen', 'king');

  var resultArray = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      var result = value + " of " + suit;
      resultArray.push(result);
      $("#list").append("<li>" + result + "</li>");
    });
  });

});
