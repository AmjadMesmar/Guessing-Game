
let fName;
let count = 0;

let myAge;
let myPets;
let myCity;
let myEdu;
let myAddiction;


function userName (){
  fName = prompt('Whats your name?').toUpperCase();
  while((fName === null) || (fName === ''))
  {
    fName = prompt('Whats your name?');
  }
  console.log('Hello ' + fName + '!');
  alert('Hello ' + fName + '!, Hope you are doing great today!');
}

function quizTime(){

  alert('Quiz time! Please answer the questions about me with yes/y ot no/n !');

  myAge = prompt('Am I am 25 years old?').toLowerCase();
  while (myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n')
  {
    myAge = prompt('Am I am 25 years old?').toLowerCase();
  }
  if((myAge === 'yes') || (myAge === 'y')){
    console.log('Wrong answer, age.');
    alert('Wrong!, I am 29 years old. =]');
  }
  else if((myAge === 'no') || (myAge === 'n')){
    console.log('Correct answer, age.');
    count++;
    console.log('Correct answers:' + count);
    alert('Correct!');
  }



  myPets = prompt('Do I have pets?').toLowerCase();
  while (myPets !== 'yes' && myPets !== 'y' && myPets !== 'no' && myPets !== 'n')
  {
    myPets = prompt('Do I have pets?').toLowerCase();
  }
  if((myPets === 'no') || (myPets === 'n')){
    console.log('Wrong answer, pets.');
    alert('Wrong!, I have 2 beautiful cats! =3');
  }
  else if((myPets === 'yes') || (myPets === 'y')){
    console.log('Correct answer, pets.');
    count++;
    console.log('Correct answers:' + count);
    alert('You are correct!');
  }


  myCity = prompt('Do I live in Amman').toLowerCase();
  while (myCity !== 'yes' && myCity !== 'y' && myCity !== 'no' && myCity !== 'n')
  {
    myCity = prompt('Do I live in Amman').toLowerCase();
  }
  if((myCity === 'yes') || (myCity === 'y')){
    console.log('Wrong answer, city.');
    alert('Wrong!, I live in the lovely city of Irbid ^_^');
  }
  else if((myCity === 'no') || (myCity === 'n')){
    console.log('Correct answer, city.');
    count++;
    console.log('Correct answers:' + count);
    alert('You got that right!');
  }


  myEdu = prompt('Do I have a Master degree?').toLowerCase();
  while (myEdu !== 'yes' && myEdu !== 'y' && myEdu !== 'no' && myEdu !== 'n')
  {
    myEdu = prompt('Do I have a Master degree?').toLowerCase();
  }
  if((myEdu === 'yes') || (myEdu === 'y')){
    console.log('Wrong answer, education.');
    alert('You are mistaken, I only have a bachelor degree! :P');
  }
  else if((myEdu === 'no') || (myEdu === 'n')){
    console.log('Correct answer, education.');
    count++;
    console.log('Correct answers:' + count);
    alert('Correct!, I have only Bachelor degree!');
  }


  myAddiction = prompt('Am I addicted to YouTube?').toLowerCase();
  while (myAddiction !== 'yes' && myAddiction !== 'y' && myAddiction !== 'no' && myAddiction !== 'n')
  {
    myAddiction = prompt('Am I addicted to YouTube?').toLowerCase();
  }
  if((myAddiction === 'no') || (myAddiction === 'n')){
    console.log('Wrong answer, addiction.');
    alert('Thats a huge mistake! YouTube is my honey and jam! :3');
  }
  else if( (myAddiction === 'yes') || (myAddiction === 'y') ){
    console.log('Correct answer, addiction.');
    count++;
    console.log('Correct answers:' + count);
    alert('Exactly!, Who isnt !? :D');
  }

  if (count === 5)
  {

    alert('Congratualtions!, You passed the quiz with a score of: ' + count +'/5.');
  }
  else if (count !== 5)
  {

    alert('I am sorry, You failed the quiz with a score of: ' + count +'/5.');
  }

  alert('Thanks for your time, '+ fName + '!');
}

userName();
quizTime();

