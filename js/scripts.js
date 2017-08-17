

// test here
$(document).ready(function() {
  $("form#sentence-form").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    $("#sentence-translated").text(sentence);

    var vowels = sentence.split(" ");
    var vowelArray = ['a','e','i','o','u'];

    vowels.forEach(function(vowel, i){
      var letter = vowel.charAt(0);
      // console.log(vowel);
      vowelArray.forEach(function(how, j){
        // console.log(letter, vow, vowel);

      if (letter === how){
        var newWord = vowel + "way";
        vowels[i] = newWord;
        // console.log(vowels[i], i);

      } else {
        var consonants = vowel.split("");
        consonants.forEach(function(c, l){
        if (c !== how){
          var consWords = vowel.substr(1);
          consWords = consWords + c;
          consonants[l] = consWords
          // console.log(consWords);
        }
        });
        console.log(consonants);
      }
      });

    });
  });
});
