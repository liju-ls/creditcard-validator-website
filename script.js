let cardNumberField = document.getElementById("card-number");

cardNumberField.addEventListener("input", (e) => {
  let cardNum = e.target.value;
  cardNum = cardNum.split("").reverse().join("");
  if (cardNum.length >= 11) {
    let sum = 0;
    for (let i = 0; i < cardNum.length; i++) {
      if (i == 0 || i % 2 == 0) {
        sum += parseInt(cardNum[i]);
      } else {
        let currentNum = parseInt(cardNum[i]) * 2;
        sum += singularDigitNumber(currentNum);
      }
    }

    if (sum % 10 == 0) {
      console.log("Valid");
    } else {
      console.log("Not valid");
    }
  }
});

function singularDigitNumber(num) {
  let numStr = num.toString();

  if (numStr.length == 1) {
    return num;
  }

  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  return sum;
}
