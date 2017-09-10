const quotes = [
  {quotation: '"Yeah, yeah, but your scientists were so preoccupied with whether or not they could that they didn\'t stop to think if they should."', source: '-Ian Malcolm, Jurassic Park'}, 
  {quotation: '"Do I really look like a guy with a plan? You know what I am? I\'m a dog chasing cars. I wouldn\'t know what to do with one if I caught it! You know, I just... *do* things."', source: '-The Joker, The Dark Knight'},
  {quotation: '"A census taker once tried to test me. I ate his liver with some fava beans and a nice chianti."', source: '-Hannibal Lector, The Silence of the Lambs'}, 
  {quotation: '"Sorry, Venkman, I\'m terrified beyond the capacity for rational thought."', source: '-Egon Spengler, Ghostbusters'},
  {quotation: '"If I\'d known we were gonna cast our feelings into words, I\'d have memorized the Song of Solomon."', source: '-Tom Reagan, Miller\'s Crossing'}, 
  {quotation: '"You see, in this world there\'s two kinds of people, my friend: Those with loaded guns and those who dig. You dig."', source: '-Blondie, The Good, The Bad, and The Ugly'}, 
  {quotation: '"The force is with you, young Skywalker, but you are not a Jedi yet".', source: '-Darth Vader, The Empire Strikes Back'},
  {quotation: '"Get away from her, you bitch!"', source: '-Ellen Ripley, Alien'}, 
  {quotation: '"All right, Mr. DeMille, I\'m ready for my close-up."', source: '-Norma Desmond, Sunset Boulevard'}, 
  {quotation: '"That\'s some bad hat, Harry."', source: '-Marcus Brody, Jaws'}, 
  {quotation: '"This is either madness... or brilliance." "It\'s remarkable how often those two traits coincide."', source: '-Will Turner & *Captain* Jack Sparrow, The Pirates of the Caribbean: The Curse of the Black Pearl'}, 
  {quotation: '"I spent eight years trying to reach him, and then another seven trying to keep him locked up because I realized that what was living behind that boy\'s eyes was purely and simply... evil."', source: '-Dr. Loomis, Halloween'}, 
  {quotation: '"Hello. My name is Inigo Montoya. You killed my father. Prepare to die."', source: '-Inigio Monto"ya, The Princess Bride'}, 
  {quotation: '"I think we\'re just gonna to have to be secretly in love with each other and leave it at that, Richie."', source: '-Margot Tenembaum, the Royal Tenembaums'}, 
  {quotation: '"I\'m not sure I agree with you a hundred percent on your police work, there, Lou."', source: '-Marge Gunderson, Fargo'}, 
  {quotation: '"He died in a bizarre gardening accident.. Authorities said...best leave it...unsolved."', source: '-Nigel Tufnel, This is Spinal Tap'}, 
  {quotation: '"Do you see this writing...? Do you know what it means...? Hospitality. And you can\'t piss on hospitality! I WON\'T ALLOW IT!"', source: '-Michael, Troll 2'}, 
  {quotation: '"In Sicily, women are more dangerous than shotguns."',source: '-Calo, The Godfather'}, 
  {quotation: '"That\'s my secret, Captain: I\'m always angry."', source: '-Bruce Banner, The Avengers'}, 
  {quotation: '"My dad is NOT Judge Judy and executioner!"', source: '-Danny Butterman, Hot Fuzz'},
  ];

  var quote = document.getElementById('quoteArea');
  var source = document.getElementById('quoteSayer');

$(document).ready(function () {
  $("#makequote").on("click", function() {
	  var randQuote = Math.floor(Math.random() * quotes.length);
	  var surpriseQuote = quotes[randQuote];

    var tweetReady = ((quotes[randQuote].quotation) + (quotes[randQuote].source)).substring(0, 134);

    quote.innerHTML = quotes[randQuote].quotation;
    source.innerHTML = quotes[randQuote].source;

    $('#tweetOut').on("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + tweetReady + '...');
    });
  });

});
  