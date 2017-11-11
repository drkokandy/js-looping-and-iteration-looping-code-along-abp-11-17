// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts (gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

function printBadges(array) {
  for (let i=0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${(i+1)}.`);
  }
}
