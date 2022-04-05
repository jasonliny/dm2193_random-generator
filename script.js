var exeButton
var inBox;
var outBox;
var outHeading;
var outText;
window.addEventListener('DOMContentLoaded', function(){
  exeButton = document.getElementById("exeButton");
  inputElem = document.getElementById("inBox");
  outBox = document.getElementById("outBox");
  outHeading = document.getElementById("outHead");
  outText = document.getElementById("outTxt");

  exeButton.addEventListener("click", generate)
});
function generate() {
    let species = ["Wraith", "Human", "Vampire", "Gnome", "Dwarf"];
    let adjectives = ["troubled", "fun", "average", "boring", "exciting", "sad"];
    let careers = ["governor", "doctor", "designer", "lawyer", "teacher"];

    let randSpecies = species[Math.floor(Math.random() * species.length)];
    let randAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randCarrer = careers[Math.floor(Math.random() * careers.length)];

    let name = outBox.value;

    outText.innerText = name + " is a " + randSpecies + " that had a " + randAdjective + " childhood. They aspire to be a " + randCarrer + ".";
    restyle();
}

function restyle() {
  let randR = Math.floor(Math.random() * 256);
  let randG = Math.floor(Math.random() * 256);
  let randB = Math.floor(Math.random() * 256);

  if (randR >= 112 && randR <=144) {
    randR += 16;
  }
  if (randG >= 112 && randG <=144) {
    randG += 16;
  }
  if (randB >= 112 && randB <=144) {
    randB += 16;
  }

  outBox.style.backgroundColor = "rgb(" + randR + "," + randG + "," + randB + ")";
  outText.style.color = "rgb(" + (255-randR) + "," + (255 - randG) + "," + (255 - randB) + ")";
  outHeading.style.color = "rgb(" + (255-randR) + "," + (255 - randG) + "," + (255 - randB) + ")";


  let txtStyles = ["solid", "double", "dotted", "dashed", "wavy"];
  let randStyle = txtStyles[Math.floor(Math.random() * txtStyles.length)];
  outTxt.style.textDecorationStyle = randStyle;

  let fontFamilies = ["serif", "sans-serif", "monospace", "cursive", "fantasy"];
  let randFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  outTxt.style.fontFamily = randFontFamily;


}
