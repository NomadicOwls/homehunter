// Define the "next" function to navigate to the next step.
function next(currentField, nextField) {
  // Implement your logic to navigate to the next step here.
  // For example, you can focus on the next field.
  document.getElementById(currentField).classList.remove("is-visible");
  document.getElementById(nextField).classList.add("is-visible");
}

// Define the "previous" function to navigate to the previous step.
function previous(currentField, prevField) {
  // Implement your logic to navigate to the previous step here.
  // For example, you can focus on the previous field.
  document.getElementById(currentField).classList.remove("is-visible");
  document.getElementById(prevField).classList.add("is-visible");
}


function showDiv() {
   document.getElementById('how-it-works').style.display = "block";
   console.log ("show how it works");
}

function closeDiv() {
   document.getElementById('how-it-works').style.display = "none";
   console.log ("hide how it works");
}

