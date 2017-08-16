var translate = function (words) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/;

  // Check if the first character is a vowel
  if (words[0].match(regex)) {
    pigLatin = words + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = words.indexOf(words.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = words.substr(vowelIndice) + words.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
};

// test here
$(document).ready(function() {
  $("form#sentence-form").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var pigLatin = translate(sentence);

    $("#sentence-translated").text(pigLatin);
  });
});
