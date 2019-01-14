var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pokemon-starters.jpg') {
        myImage.setAttribute('src', 'images/pokemon-sun.jpg');
    } else {
        myImage.setAttribute('src', 'images/pokemon-starters.jpg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Pokémon are cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Pokémon are cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
};