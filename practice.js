//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here

  var me = {
    name: "Marco",
    age: 37
  };

  alert(me.name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here

  var favoriteThings = {
    band: "Everclear",
    food: "Pasta",
    person: "my Mom",
    book: "The Good Earth",
    movie: "V for Vendetta",
    holiday: "New Year's"
  };



//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings.car = "BMW";
favoriteThings.brand = "none";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here

  favoriteThings.food = "Lettuce";
  favoriteThings.book = "50 Shades of Gray";




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here
var backPack = {};

var item = "firstPocket";
backPack["item"] = "chapstick";
backPack.color = "dark blue";

backPack;


//After you do the above, alert your entire backPack object.

  //Code here

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here

console.log(backPack);


//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here

var me  = {
  name: "Marco",
  age: 37,
  height: "5\' 7\"",
  gender: "male",
  married: "no",
  eyeColor: "brown",
  hairColor: "brown",
};
//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here

// for (var x in me) {
//   alert(me["x"]);
// }

for (var x in me) {console.log(me[x]);}
for (var x in me) {console.log( x + ": " + me[x]);} // name: Marco, age: 37, height: 5' 7", gender: male, married: no, eyeColor: brown, hairColor: brown

//NEXT PROBLEM

//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here
  var album = new Object();

  album.jump = 4;
  album.sit = 3;
  album.stand = 5;
  album.crawl = 5;
  album.lay = 3;

//Now, loop through your album object alerting every song title individually.

  //Code Here

  for (var x in album) {
    alert(x);
  }




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here

  var states = {
    Fl: 5,
    NY: 40000,
    CA: 3,
    GA: 2,
    WA: 1
  };



//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here

for (var x in states) {
  if (states[x] > 30000) {
    alert(x);
  }
}



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here




//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

user.name = "Tyler S. McGinnis";
user.email = "tyler.mcginnis@devmounta.in";


//Now call the sayName method that's on the user object which will alert the users email

  //Code Here
user.sayName();



//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here

var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here

methodCollection.alertHello = function() {alert("Hello!");};
methodCollection.logHello = function() {console.log("Hello!");}

//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();


//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  //Code Here
function MakePerson(name, birthday, ssn) {
  var x = {};
    x.name = name;
    x.birthday = birthday;
    x.ssn = ssn;
   return x;
}

var marco = MakePerson("Marco", "4/11", 123456789); // Object {name: "Marco", birthday: "4/11", ssn: 123456789}


//NEXT PROBLEM

// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  //Code Here

function MakeCard(accNumber, expDate, securityCode) {
  var newCard = {};
  newCard.accNumber = accNumber;
  newCard.expDate = expDate;
  newCard.securityCode = securityCode;

  return newCard;
}

var newCard = MakeCard(12345, "never", 123);

//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  //Code Here!

  function bindCard(person, cc) {
    var combined = {};
    for (var key in person) {
      combined[key] = person[key];

    }
    for (var key in cc) {
      combined[key] = cc[key];
    }
return combined

  }

var marcoCard = bindCard(marco, genericCard);



************************************************************

  function bindCard(person, cc) {
    var combined = {};
    for (var x in person) {
      combined[x] = person[x];
  return combined
    }


  }











***************** Using Object.assign() method ************************

function MakePerson(name, birthday, ssn) {
  var newPerson = {};
    newPerson.name = name;
    newPerson.birthday = birthday;
    newPerson.ssn = ssn;
   return newPerson;
}

var marco = MakePerson("Marco", "4/11", 123456789);




function MakeCard(accNumber, expDate, securityCode) {
  var newCard = {};
  newCard.accNumber = accNumber;
  newCard.expDate = expDate;
  newCard.securityCode = securityCode;

  return newCard;
}

var genericCard = MakeCard(12345, "never", 123);




var cardObjAssign ={};
  var marcoCard = Object.assign(cardObjAssign, marco, genericCard);
  marcoCard; // Object {name: "Marco", birthday: "4/11", ssn: 123456789, accNumber: 12345, expDate: "never"…}


----------------- Object.assign() method in a function --------------
function bindCard(person, cc) {
  var x = {};
  x = Object.assign(x, person, cc);
  return x;
}

var marcoCard = bindCard(marco, genericCard);
marcoCard; // bject {name: "Marco", birthday: "4/11", ssn: 123456789, accNumber: 12345, expDate: "never"…}
