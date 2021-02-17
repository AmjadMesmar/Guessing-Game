
let firstName;
let count = 0;

let myAge;
let myPets;
let myCity;
let myEdu;
let myAddiction;


function userName() {
  firstName = prompt('Whats your name?').toUpperCase();
  while ((firstName === null) || (firstName === '')) {
    firstName = prompt('Whats your name?');
  }
  console.log('Hello ' + firstName + '!');
  alert('Hello ' + firstName + '!, Hope you are doing great today!');
}




const age = function () {
  myAge = prompt('Am I am 25 years old?').toLowerCase();
  while (myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n') {
    myAge = prompt('Am I am 25 years old?').toLowerCase();
  }
  if ((myAge === 'yes') || (myAge === 'y')) {
    console.log('Wrong answer, age.');
    alert('Wrong!, I am 29 years old. =]');
  }
  else if ((myAge === 'no') || (myAge === 'n')) {
    console.log('Correct answer, age.');
    count++;
    console.log('Correct answers:' + count);
    alert('Correct!');
  }

};



const pet = function () {
  myPets = prompt('Do I have pets?').toLowerCase();
  while (myPets !== 'yes' && myPets !== 'y' && myPets !== 'no' && myPets !== 'n') {
    myPets = prompt('Do I have pets?').toLowerCase();
  }
  if ((myPets === 'no') || (myPets === 'n')) {
    console.log('Wrong answer, pets.');
    alert('Wrong!, I have 2 beautiful cats! =3');
  }
  else if ((myPets === 'yes') || (myPets === 'y')) {
    console.log('Correct answer, pets.');
    count++;
    console.log('Correct answers:' + count);
    alert('You are correct!');
  }
};

const city = function () {
  myCity = prompt('Do I live in Amman').toLowerCase();
  while (myCity !== 'yes' && myCity !== 'y' && myCity !== 'no' && myCity !== 'n') {
    myCity = prompt('Do I live in Amman').toLowerCase();
  }
  if ((myCity === 'yes') || (myCity === 'y')) {
    console.log('Wrong answer, city.');
    alert('Wrong!, I live in the lovely city of Irbid ^_^');
  }
  else if ((myCity === 'no') || (myCity === 'n')) {
    console.log('Correct answer, city.');
    count++;
    console.log('Correct answers:' + count);
    alert('You got that right!');
  }
};
const edu = function () {

  myEdu = prompt('Do I have a Master degree?').toLowerCase();
  while (myEdu !== 'yes' && myEdu !== 'y' && myEdu !== 'no' && myEdu !== 'n') {
    myEdu = prompt('Do I have a Master degree?').toLowerCase();
  }
  if ((myEdu === 'yes') || (myEdu === 'y')) {
    console.log('Wrong answer, education.');
    alert('You are mistaken, I only have a bachelor degree! :P');
  }
  else if ((myEdu === 'no') || (myEdu === 'n')) {
    console.log('Correct answer, education.');
    count++;
    console.log('Correct answers:' + count);
    alert('Correct!, I have only Bachelor degree!');
  }
};

const addiction = function () {
  myAddiction = prompt('Am I addicted to YouTube?').toLowerCase();
  while (myAddiction !== 'yes' && myAddiction !== 'y' && myAddiction !== 'no' && myAddiction !== 'n') {
    myAddiction = prompt('Am I addicted to YouTube?').toLowerCase();
  }
  if ((myAddiction === 'no') || (myAddiction === 'n')) {
    console.log('Wrong answer, addiction.');
    alert('Thats a huge mistake! YouTube is my honey and jam! :3');
  }
  else if ((myAddiction === 'yes') || (myAddiction === 'y')) {
    console.log('Correct answer, addiction.');
    count++;
    console.log('Correct answers:' + count);
    alert('Exactly!, Who isnt !? :D');
  }
};


function randomNumber() {
  let guessNumber = '55';
  let guessCount = 4;
  let rightCount = 1;
  let inputNumber;

  alert('Please guess the correct number, you have ' + guessCount + ' tries!');

  for (let i = 4; i !== 0; i--) {
    inputNumber = prompt('Please guess the number:');

    if (inputNumber >= 100) {
      guessCount--;
      rightCount++;
      alert('The number is too high! You have ' + guessCount + ' tries remaining!');
      console.log('Too high input');
      console.log('Tries remaining:' + guessCount);
    }

    else if (inputNumber <= 10) {
      guessCount--;
      rightCount++;
      alert('The number is too low! You have ' + guessCount + ' tries remaining!');
      console.log('Too low input');
      console.log('Tries remaining:' + guessCount);
    }

    else if (inputNumber === guessNumber) {
      alert('The number is correct! You have done it,  ' + firstName + ', great job!');
      alert('You found the correct number with ' + rightCount + ' tries!');
      console.log('Correct input');
      count++;
      console.log('Correct answers:' + count);
      break;
    }

    else if (inputNumber >= 30 && inputNumber <= 70) {
      guessCount--;
      rightCount++;
      alert('Its getting warm, you are getting close, you have ' + guessCount + ' tries remaining!');
      console.log('Warm input');
    }

    else {
      guessCount--;
      alert('The number is incorrect! You have ' + guessCount + ' tries remaining!');
      console.log('Incorrect input');
      console.log('Tries remaining:' + guessCount);
    }

  }
  if (guessCount === 0) {
    alert('You could not guess the number, it was ' + guessNumber + ', better luck next time, ' + firstName + '!');
  }
}


function arrayQuestion() {
  let myArray = [5, 13, 19];
  let inputNumber;
  let guessArrayTries = 6;
  let rightCount = 1;

  alert('Please guess one of the correct numbers betwee 0-20, you have ' + guessArrayTries + ' tries!');

  for (let i = 6; i !== 0; i--) {
    inputNumber = Number(prompt('Please guess the numbers:'));


    if (inputNumber === myArray[0] || inputNumber === myArray[1] || inputNumber === myArray[2]) {
      alert('This is a correct number! You have done it,  ' + firstName + ', great job!');
      alert('You found the correct number with ' + rightCount + ' tries!');
      console.log('Correct input');
      count++;
      console.log('Correct answers:' + count);
      break;
    }

    else {
      guessArrayTries--;
      rightCount++;
      alert('The number is incorrect, ' + guessArrayTries + ' tries remaining!');
      console.log('Wrong input');
      console.log('Tries remaining:' + guessArrayTries);
    }
  }
  if (guessArrayTries === 0) {
    alert('You could not guess any of the numbers, the numbers were  (' + myArray + '), better luck next time, ' + firstName + '!');
  }
}


userName();
alert('Quiz time! Please answer the questions about me with yes/y ot no/n !');
age();
pet();
city();
edu();
addiction();
randomNumber();
arrayQuestion();


if (count === 7) {

  alert('Congratualtions!, You passed the quiz with a score of: ' + count + '/7.');
}
else if (count !== 7) {

  alert('I am sorry, You failed the quiz with a score of: ' + count + '/7.');
}

alert('Thanks for your time, ' + firstName + '!');
