var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

//Collect User Input
var tripInfo = function () {
  var totalBudget = Number(
    prompt("What is your total budget? (enter a numerical value ex.'1000')")
  );
  var accomodation = Number(
    prompt(
      "What are you accomodation costs? (enter a numerical value ex.'500')"
    )
  );
  var numDays = Number(
    prompt(
      "How many days does your trip last? (enter a numerical value ex.'5')"
    )
  );

  calculateDailyBudget(totalBudget, accomodation, numDays);
};

//Calculate Daily Budget
var calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  var daily = ((totalBudget - accomodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun`;
};

//Call the Function, Button Click Event
tripInfoButton.addEventListener("click", tripInfo);
