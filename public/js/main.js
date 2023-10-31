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


var bgColorArray = ['https://images.unsplash.com/photo-1679756418555-660318ca5fff?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1614521272693-73052eaefc51?auto=format&fit=crop&q=80&w=3588&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1526505917130-857817501277?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];

document.body.style.backgroundImage = 'url(' + selectBG + ')';

