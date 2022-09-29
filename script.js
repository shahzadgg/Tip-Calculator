// Custom function
function calculateTip() {
  // Store the data of the input
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  // Quick validation

  if (billAmount === "" || serviceQuality == 0) {
    window.alert("please enter some values to get this baby up and running!");
    return; // this will prevent the functionfrom continuing
  }

  // Chech to use if this input empty or less than or equal to 1
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Do some math!
  var total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  // Display the Tip
  console.log();
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = "total";
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
