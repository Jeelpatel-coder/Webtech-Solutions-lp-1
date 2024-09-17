const button = document.querySelector(".nav-item3 #button2");
let mode = "light";
button.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector("h3").style.borderColor = "white";
        document.querySelector("i").style.borderColor = "white";
        document.querySelector("#button2").style.backgroundColor = "white";
        document.querySelector("#button2").style.color = "black";
        button.innerText = "dark mode";

    }
    else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        document.querySelector("h3").style.borderColor = "black";
        document.querySelector("i").style.borderColor = "black";
        document.querySelector("#button2").style.backgroundColor = "black";
        document.querySelector("#button2").style.color = "white";
        button.innerText = "light mode";
    }
})

const ni1 = document.querySelector(".ni-1");
ni1.addEventListener("mouseover", () => {
    document.querySelector(".ni-1").style.backgroundColor = "orangered";
    document.querySelector(".ni-1").style.color = "white";
    document.querySelector(".ni-1").style.border = "1.5px solid white";
})

ni1.addEventListener("mouseout", () => {
    document.querySelector(".ni-1").style.backgroundColor = "white";
    document.querySelector(".ni-1").style.color = "black";
    document.querySelector(".ni-1").style.border = "1.5px solid black";
})

const ni_1 = document.querySelector(".ni1");
ni_1.addEventListener("mouseover", () => {
    document.querySelector(".ni1").style.backgroundColor = "orangered";
    document.querySelector(".ni1").style.color = "white";
    document.querySelector(".ni1").style.border = "1.5px solid white";
})

ni_1.addEventListener("mouseout", () => {
    document.querySelector(".ni1").style.backgroundColor = "white";
    document.querySelector(".ni1").style.color = "black";
    document.querySelector(".ni1").style.border = "1.5px solid black";
})

const button3 = document.querySelector("#button3");
button3.addEventListener("mouseover", () => {
    document.querySelector("#button3").style.backgroundColor = "orangered";
    document.querySelector("#button3").style.color = "white";
    document.querySelector("#button3").style.border = "1.5px solid white";
})

button3.addEventListener("mouseout", () => {
    document.querySelector("#button3").style.backgroundColor = "white";
    document.querySelector("#button3").style.color = "black";
    document.querySelector("#button3").style.border = "1.5px solid black";
})

const button1 = document.querySelector("#button1");
button1.addEventListener("mouseover", () => {
    document.querySelector("#button1").style.backgroundColor = "white";
    document.querySelector("#button1").style.color = "black";
    document.querySelector("#button1").style.border = "1.5px solid black";
})

button1.addEventListener("mouseout", () => {
    document.querySelector("#button1").style.backgroundColor = "orangered";
    document.querySelector("#button1").style.color = "white";
    document.querySelector("#button1").style.border = "1.5px solid white";
})

const icon1 = document.querySelector(".icon1");
icon1.addEventListener("mouseover", () => {
    document.querySelector(".icon1").style.color = "black";
})
icon1.addEventListener("mouseout", () => {
    document.querySelector(".icon1").style.color = "orangered";
})

const icon2 = document.querySelector(".icon2");
icon2.addEventListener("mouseover", () => {
    document.querySelector(".icon2").style.color = "black";
})
icon2.addEventListener("mouseout", () => {
    document.querySelector(".icon2").style.color = "orangered";
})

const icon3 = document.querySelector(".icon3");
icon3.addEventListener("mouseover", () => {
    document.querySelector(".icon3").style.color = "black";
})
icon3.addEventListener("mouseout", () => {
    document.querySelector(".icon3").style.color = "orangered";
})

const icon4 = document.querySelector(".icon4");
icon4.addEventListener("mouseover", () => {
    document.querySelector(".icon4").style.color = "black";
})
icon4.addEventListener("mouseout", () => {
    document.querySelector(".icon4").style.color = "orangered";
})