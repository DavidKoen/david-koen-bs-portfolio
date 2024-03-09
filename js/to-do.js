// let myNumber = prompt("Enter your favorite weekday").toLowerCase();
// let theResponse;

// switch (myNumber) { // You can have as many cases inside a switch statement as you’d
// //     like. The switch statement will try to match the expression to
// //     each case until it finds one that matches. Then it runs the statements within that case until it gets to the break statement, which
// //     causes it to exit the switch statement. Each case must end with a
// //     break statement or semicolon (;). This tells the program to do
// //     everything inside the case up until the break statement and then
// //     stop.
//     case "monday":
//         theResponse = "Ack!";
//         break;

//     case "tuesday":
//         theResponse = "Taco day!";
//         break;

//     case "wednesday":
//         theResponse = "Halfway there!";
//         break;

//     case "thursday":
//         theResponse = "It's the new Friday!";
//         break;

//     case "friday":
//         theResponse = "TGIF! Yeah!";
//         break;

//     case "saturday":
//         theResponse = "What a day!";
//         break;
        
//     case "sunday":
//         theResponse = "Sunday = Funday!";
//         break;

//     default: // A default case will run if no case matches the result of the expression.
//         theResponse = "I haven't heard of that one!";
//         break;
// }

// alert(theResponse);

// TASK

let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");


todoButton.addEventListener("click", displayActivity);

let d = new Date();

displayDate();

function displayDate() {
  todayDate.innerHTML = d.toDateString();
}

function displayActivity() {

let dayOfWeek = d.getDay();

  let youShould;

  switch (dayOfWeek) {
    case 0:
      youShould = "Take it easy. You've earned it.";
      break;
    case 1:
      youShould = "Gotta do what ya gotta do!";
      break;
    case 2:
      youShould = "Take time to smell the roses!";
      break;
    case 3:
      youShould = "Don't forget to eat breakfast!";
      break;
    case 4:
    youShould = "Go for a walk.";
    break;
    case 5:
      youShould = "Make a list of things you like to do.";
      break;
    case 6:
      youShould = "Do one thing from your list of things you like to do.";
      break;
    default:
      youShould = "Please check to see if your calendar settings are coorect.";
      break;
  }

  
  document.getElementById("thingToDo").innerHTML = youShould;
}