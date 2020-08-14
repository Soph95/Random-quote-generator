var quotes = ["'Sadness flies away on the wings of time'", "'Negative thoughts are nails that build a prison of failure'",
  "'Beginning is easy, continuing is hard'", "'In order to have great happiness you have to have great pain and unhappiness, othewrise how would you know when you are happy?'", "'Wisdom is only found in truth'", "'It doesn't matter who you are, or where you came from. The ability to triumph begins with you. Always'",
];
var authors = ["-Jean de La Fontaine", "-Jon Gordon", "-Japanese Proverb", "-Leslie Caron", "-Goethe", "-Oprah"];


document.querySelector("button").addEventListener("click", function() {
  for (var i = 0; i < quotes.length; i++) {
    var randomQuote = Math.floor(Math.random() * 6);
    document.querySelector(".quote").innerHTML = quotes[randomQuote];
    document.querySelector(".author").innerHTML = authors[randomQuote];
  }
});
