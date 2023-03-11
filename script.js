const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");
// Get number of people from number of people div

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  bill = parseFloat(billTotalInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  tip = parseFloat(tipInput.value);
  tip_percentage = tip / 100;

  // get the total tip amount
  total = bill + tip_percentage * bill;
  console.log(total);
  // calculate the total (tip amount + bill)

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople;

  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerHTML = `£${perPersonTotal.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1;
  numberOfPeopleDiv.innerHTML = numberOfPeople;
  calculateBill();
  // update the DOM with the new number of people

  // calculate the bill based on the new number of people
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  numberOfPeople -= 1;
  if (numberOfPeople <= 0) {
    numberOfPeopleDiv.innerHTML = "Invalid Number";
  } else {
    numberOfPeopleDiv.innerHTML = numberOfPeople;
    calculateBill();
  }
};
