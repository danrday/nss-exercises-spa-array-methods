var testIIFE = (function() {

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];


/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var domElement = document.getElementById("mainDiv");

function printToDOM(x) {
  domElement.innerHTML += x + " ";
};

planets.forEach(printToDOM);


var el = document.getElementById("planets");


// Use the map method to create a new array where the first letter of each planet is capitalized



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var planetsCapitalized = planets.map(capitalizeFirstLetter);

console.log("planetsCapitalized", planetsCapitalized);

domElement.innerHTML += "<p>Planets Capitalized:</p>";

planetsCapitalized.forEach(printToDOM);

// Use the filter method to create a new array that contains planets with the letter 'e'

function filterLetterE (word) {
  var flag = true;

  for (var i= 0; i < word.length; i++) {
    console.log(word[i]);

    if (word[i].toLowerCase() === "e") {
      flag = false
    } 
  }
      return flag;
};

var filteredArray = planetsCapitalized.filter(filterLetterE);

console.log("filteredArray", filteredArray);

domElement.innerHTML += "<p>removed items with the letter e:</p>"

filteredArray.forEach(printToDOM);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(a, b) {return a + " " + b});

domElement.innerHTML += "<p>reduced array: </p>";
domElement.innerHTML += sentence;

} () );





