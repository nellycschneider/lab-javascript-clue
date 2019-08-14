// Characters

const mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

const drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation: "Scientist"
};

const profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};

const missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};

const mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

const mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};

// Weapons

const rope = { weaponType: "rope", weight: 10 };
const knife = { weaponType: "knife", weight: 8 };
const candlestick = { weaponType: "candlestick", weight: 2 };
const dumbbell = { weaponType: "dumbbell", weight: 30 };
const poison = { weaponType: "poison", weight: 2 };
const axe = { weaponType: "axe", weight: 15 };
const bat = { weaponType: "bat", weight: 13 };
const trophy = { weaponType: "throphy", weight: 25 };
const pistol = { weaponType: "pistol", weight: 20 };

// Rooms
const diningRoom = { name: "Dining Room" };
const conservatory = { name: "Conservatory" };
const kitchen = { name: "Kitchen" };
const study = { name: "Study" };
const library = { name: "Library" };
const billiardRoom = { name: "Billiard Room" };
const lounge = { name: "Lounge" };
const ballroom = { name: "Ballroom" };
const hall = { name: "Hall" };
const spa = { name: "Spa" };
const livingRoom = { name: "Living Room" };
const observatory = { name: "Observatory" };
const theater = { name: "Theater" };
const guestHouse = { name: "Guest House" };
const patio = { name: "Patio" };

// Characters Collection

var charactersArray = [
  mrGreen,
  drOrchid,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
];

// Rooms' Collection
var roomsArray = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
];

// Weapons Collection
var weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

function randomSelector(array) {
  let randomElement = array[Math.floor(Math.random() * array.length)];

  return randomElement;
}

function pickMistery() {
  let character = randomSelector(charactersArray);
  let room = randomSelector(roomsArray);
  let weapon = randomSelector(weaponsArray);
  let misteryEnvelope = { suspect: character, room: room, weapon: weapon };
  return misteryEnvelope;

  //   let randomElement1 = array1[Math.floor(Math.random() * array1.length)];
  //   let randomElement2 = array2[Math.floor(Math.random() * array2.length)];
  //   let randomElement3 = array3[Math.floor(Math.random() * array3.length)];

  //   return player1= [randomElement1, randomElement2, randomElement3];
}

function revealMistery(misteryEnvelope) {
  return `${misteryEnvelope.suspect.first_name} ${
    misteryEnvelope.suspect.last_name
  } killed Mr. Boddy using the ${misteryEnvelope.weapon.weaponType} in the ${
    misteryEnvelope.room.name
  }!!!!`;
}
