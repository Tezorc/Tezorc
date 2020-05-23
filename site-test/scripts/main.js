// Click change image
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/animal.svg') {
      myImage.setAttribute('src', 'images/LOGO2020_Color_v02.svg');
    } else {
      myImage.setAttribute('src', 'images/animal.svg');
    }
});
/*
Tout ce qui est écrit ici est entre commentaires.
*/
//Click
/*document.querySelector('body').addEventListener('click', function () {
    alert('Aïe, arrêtez de cliquer !!');
});*/
//
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}
if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}
myButton.addEventListener('click', function() {
  setUserName();
});