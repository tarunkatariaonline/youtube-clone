var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4]  +".";

   return content
 
};

export default  sentence;
