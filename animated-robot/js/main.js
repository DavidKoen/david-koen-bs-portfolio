// document.getElementById("lefteye").style.backgroundColor = "red"; // STYLES THE CSS.

// document.getElementById("body").style.border = "2px solid black";

// document.getElementById("righteye").style.borderStyle = "dotted";

// document.getElementById("righteye").style.borderColor = "yellow";

// QUICK TASK:

// document.getElementById("head").style.transform = "rotate(-15deg)";

// document.getElementById("nose").style.borderRadius = "60px";

// document.getElementById("rightarm").style.backgroundColor = "green";

// document.getElementById("mouth").style.borderColor = "pink";

// HANDLING EVENTS

// let rightEye = document.getElementById("righteye");
// let leftEye = document.getElementById("lefteye");

// rightEye.addEventListener("click", moveUpDown);
// leftEye.addEventListener("click", moveRightLeft);

// function moveUpDown(e) {
//     let robotPart = e.target; // This statement uses the event object (that comes automatically from the addEventListener method) to find out what part of the robot (what element) was clicked on.
//     let top = 0;
//     let id = setInterval(frame, 10) // The setInterval command will run the function listed first in the parentheses, and will do it on a schedule determined by the number in the parentheses.

//     function frame() {
//         robotPart.style.top = top + '%';
//         top++;
//         if (top === 20) {
//             clearInterval(id);
//         }
//     }
// };

// function moveRightLeft(e) {
//     let robotTarget = e.target;
//     let left = 0;
//     let id = setInterval(frame, 10)

//     function frame() {
//         robotTarget.style.left = left + "%";
//         left++;
//         if (left === 60) {
//             clearInterval(id)
//         }
//     }
// }

// TASK

let mouth = document.getElementById("mouth");
let puke = document.getElementById("puke");

let logo = document.getElementById("logo");

let nose = document.getElementById("nose");

mouth.addEventListener("mouseover", vom);
mouth.addEventListener("mouseout", clean);

logo.addEventListener("click", spin);

nose.addEventListener("click", moveUpDown);

function vom() {
    puke.style.visibility = "visible";
    puke.style.height = "100%";
    puke.style.transition = "height 1s";
};

function clean() {
    puke.style.height = "0%";
    puke.style.transition = "height 1s";
}

function spin() {
    logo.style.transform = "rotate(36000deg)";
    logo.style.transition = "all 100s";
}

function moveUpDown(e) {
    for (let i = 0; i < 50; i++) {
        let robotPart = e.target;
        let t = 0;
        let id = setInterval(frame, 20) 
    
        function frame() {
            robotPart.style.top = t + '%';
            t++;
            if (t === 51) {
                t = 0;
            }
        }
    }
};