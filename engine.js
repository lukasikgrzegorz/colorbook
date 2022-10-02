//Refs
const svgHolder = document.querySelector(".canvas-holder");
const svgCanva = document.querySelector("svg");
const colorHolder = document.querySelector(".color-holder");
const chooseImg = document.querySelector(".choose-images");
const frog = document.querySelector("#frog");
let actualColor = "red";

let colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "brown",
    "pink",
    "black",
    "white"
]

//Create Buttons
for (color of colors) {
    let newButton = document.createElement("button");
    newButton.style.backgroundColor = color;
    colorHolder.append(newButton);
}

//Set actual color
colorHolder.addEventListener("click", (e) => {
    actualColor = e.target.style.backgroundColor;
})

//Canvas coloring
svgHolder.addEventListener("click", (e) => {
    e.target.hasAttribute("fill") ? e.target.setAttribute("fill", actualColor) : null;
})

//Choose images
chooseImg.addEventListener("click", (e) => {
    if (event.target.nodeName === "BUTTON") {
        console.log(e.target);
        svgHolder.innerHTML = e.target.children[0].innerHTML;
    }
    
    
})