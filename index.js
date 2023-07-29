//wrapGifts: returns an array of thank you messages for each name provided to the function */
const writeCards = function(names, graduation) {
  const myMessage = [];
  for (let i = 0; i < names.length; i++) {
      myMessage.push(`Thank you, ${names[i]}, for the wonderful ${graduation} gift!`);
  }
  return myMessage;

}

/**const names = ["ines", "amina", "naila", "dalila"];
* console.log(writeCards(names, "RE:CODED graduation"));*/

//countdown: invokes console.log once for each number, counting down from the number provided to zero, and logs each number when counting down, starting from the number provided

const countDown = function(number) {
  let mycount = 10;
  while (mycount >= 0) {
      console.log(mycount--);
  }
}
countDown(10);