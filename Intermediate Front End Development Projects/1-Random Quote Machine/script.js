/*
*   Random Quotes Program
*   Copyright (c) 2017 Mohamed Ashraf.
*   License under the MIT license.
*/

(function (){

  $(document).ready(function(){
    // Global variables
      var randomQuote  = '';
      var randomAuthor = ''; 
      var colors = [
        '#1abc9c',
        '#2ecc71',
        '#3498db',
        '#9b59b6',
        '#f1c40f',
        '#e67e22',
        '#e74c3c',
        '#9b59b6',
        '#f1c40f',
        '#e74c3c'
      ];  
      getQuotes();

    // get Quote function
    function getQuotes(){
      var quotes  = [
        'The best way to remember your wife\'s birthday is to forget it once.',
        'She\'s too young for Medicare and too old for me to care.',
        'Gray hair is God\'s graffiti.',
        'I lived in Miami for a while, in a section with a lot of really old people. The average age in my apartment house was dead.',
        'Good Americans, when they die, go to Paris.',
        'We had a very successful trip to Russia we got back.',
        'Enjoy life. Think of all the women who passed up dessert on the Titanic.',
        'Everybody should believe in something, I believe I\'ll have another drink.',
        'I know lots more old drunks than old doctors.',
        'I\'m a one-drink woman, two at the most, three I\'m under the table, four I\'m under the host.'
      ]
      var authors = [
        '- E. Joseph Cossman',
        '- Anonymous',
        '- Bill Cosby',
        '- Gabe Kaplan',
        '- T. G. Appleton',
        '- Bob Hope',
        '- Anonymous',
        '- Anonymous',
        '- Joe E. Lewis',
        '- Anonymous'
      ];

      var randomNumber = Math.floor(Math.random()*quotes.length);
      randomQuote = quotes[randomNumber];
      randomAuthor = authors[randomNumber];

      $(".quote-text, .quote-text-container>i").animate({opacity: 0}, 500,function() {
            $(this).animate({opacity: 1}, 500);
            $('.quote-text').text(randomQuote);
        });
      $(".quote-author, .quote-author-container>i").animate({opacity: 0}, 500,function() {
            $(this).animate({opacity: 1}, 500);
            $('.quote-author').text(randomAuthor);
        });

      $("body").css("background-color", colors[randomNumber]);
      $("#new-quotes").css("background-color", colors[randomNumber]);
      $(".quote-text-container, .quote-text-container>i").css("color", colors[randomNumber]);
      $(".quote-author-container, .quote-author-container>i").css("color", colors[randomNumber]);
    };


    // New Quote click Event
      $('#new-quotes').on('click', function(){
        getQuotes();
      });

    // Twitter button click Event
      $('#tweet-quotes').on('click',function(){
        window.open('https://twitter.com/intent/tweet?text='+'"'+randomQuote+'" '+randomAuthor);
      });

  });
})();