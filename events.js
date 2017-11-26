const target = document.getElementById("output-target");
target.innerHTML = "Click on one of the sections above!";
const sections = document.getElementsByTagName("section");

//add click events to the 'section' elements
for (let i = 0; i <sections.length; i++) {
    sections[i].addEventListener("click", function(event) {
        target.innerHTML = "You have clicked on the '" + sections[i].innerHTML + "' section!";
    });
};

// add hover event for 'h1' element
const headingh1 = document.getElementById("page-title");
headingh1.addEventListener("mouseover", function(event) {
    target.innerHTML = "You moved your mouse over the header!";
}); 
headingh1.addEventListener("mouseout", function(event) {
    target.innerHTML = "You left me!";
});

// add syncronization to input box and target element
// assigns the text box input using keyword/method of 'value' 
const inputBox = document.getElementById("keypress-input");
inputBox.addEventListener("input", function(event) {
    target.innerHTML = inputBox.value;
});

// set guinea pig element to a var so i can use it in all the event listeners below
const gp = document.getElementById("guinea-pig");

// 'Add color' button event
const addColorB = document.getElementById("add-color");
addColorB.addEventListener('click', function(event) {
    // gp.className = ""; // removes any other classes first. this is optional
    gp.className += " makeBlue";
});

// event to make text much larger
const hulkB = document.getElementById("make-large");
hulkB.addEventListener("click", function(event) {
    // gp.className = ""; //optional
    gp.className += " bigly";
});

// add border to element with event
const bordyB = document.getElementById("add-border");
bordyB.addEventListener("click", function(event) {
    gp.className += " bordertown"; // removed the className eraser bc this one needs to stack with the rounded one
});

// event listener for rounded border
const roundyB = document.getElementById("add-rounding");
roundyB.addEventListener("click", function(event) {
    gp.className += " rounded";
});

