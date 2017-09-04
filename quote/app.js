var quotes = [
  "'Yeah, yeah, but your scientists were so preoccupied with whether or not they could that they didn't stop to think if they should.'</br>-Ian Malcolm, Jurassic Park", 
  "'Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it! You know, I just... *do* things.'</br>-The Joker, The Dark Knight", 
  "'A census taker once tried to test me. I ate his liver with some fava beans and a nice chianti.'</br>-Hannibal Lector, The Silence of the Lambs", 
  "'Sorry, Venkman, I'm terrified beyond the capacity for rational thought.'</br>-Egon Spengler, Ghostbusters", 
  "'If I'd known we were gonna cast our feelings into words, I'd have memorized the Song of Solomon.'</br>-Tom Regan, Miller's Crossing", 
  "'You see, in this world there's two kinds of people, my friend: Those with loaded guns and those who dig. You dig.'</br>-Blondie, The Good, The Bad, and The Ugly", 
  "'The force is with you, young Skywalker, but you are not a Jedi yet.'</br>-Darth Vader, The Empire Strikes Back", 
  "'Get away from her, you bitch!'</br>-Ellen Ripley, Aliens", 
  "'All right, Mr. DeMille, I'm ready for my close-up.'</br>-Norma Desmond, Sunset Boulevard", 
  "'That's some bad hat, Harry.'</br>-Marcus Brody, Jaws", 
  " 'This is either madness... or brilliance.''It\'s remarkable how often those two traits coincide.'</br>-Will Turner & *Captain* Jack Sparrow, The Pirates of the Caribbean: The Curse of the Black Pearl", 
  "'I spent eight years trying to reach him, and then another seven trying to keep him locked up because I realized that what was living behind that boy's eyes was purely and simply... evil.'</br>-Dr. Loomis, Halloween", 
  "'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.'</br>-Inigio Montoya, The Princess Bride", 
  "'I think we're just gonna to have to be secretly in love with each other and leave it at that, Richie.'</br>-Margot Tenembaum, the Royal Tenembaums", 
  "'I'm not sure I agree with you a hundred percent on your police work, there, Lou.'</br>-Marge Gunderson, Fargo'", 
  "'He died in a bizarre gardening accident.. Authorities said... best leave it... unsolved.'</br>-Nigel Tufnel, This is Spinal Tap", 
  "'Do you see this writing...? Do you know what it means...? Hospitality. And you can't piss on hospitality! I WON'T ALLOW IT!'</br>-Michael, Troll 2", 
  "'In Sicily, women are more dangerous than shotguns.'</br>-Calo, The Godfather", 
  "'That's my secret, Captain: I'm always angry.'</br>-Bruce Banner, The Avengers", 
  "'My dad is NOT Judge Judy and executioner!'</br>-Danny Butterman, Hot Fuzz"
  ];

$(document).ready(function () {
  $("#makequote").on("click", function() {
	  var randQuote = Math.floor(Math.random() * quotes.length);
	  var surpriseQuote = quotes[randQuote];
    
    $("#quoteArea").html(surpriseQuote);

    $('#tweetOut').on("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + surpriseQuote);
    });
  });

});
  