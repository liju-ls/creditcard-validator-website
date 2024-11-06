let cardNumberField = document.getElementById("card-number");
let cardField = document.getElementById("card");
let styleChanged = false;

cardNumberField.addEventListener("input", (e) => {
  let cardNum = e.target.value;

  if (cardNum.length > 20) {
    e.target.value = cardNum.slice(0, 20);
  }

  cardNum = cardNum.split("").reverse().join("");

  if (cardNum.length >= 12) {
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
      cardField.style.boxShadow = "0 0 50px rgba(0, 255, 0, 1)";
      styleChanged = true;
    } else {
      cardField.style.boxShadow = "0 0 50px rgba(255, 0, 0, 1)";
      styleChanged = true;
    }
  } else {
    if (styleChanged) {
      cardField.style.boxShadow = "0 0 50px rgba(0, 0, 0, 0.3)";
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
