// Parameters for the left section of the app
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector(".images").children;
const submit = document.querySelector(".submit")
let result = document.querySelectorAll(".name");
const totalImages = images.length;
let index = 0;

// Logic for the left side section of the app
prev.addEventListener("click", () => {
    nextImage('next');
})

next.addEventListener("click", () => {
    nextImage("prev")
})

function nextImage(direction) {
    if (direction == "next") {
        index++;
        console.log(index)
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('show');
    }
    images[index].classList.add('show');
}


// parameters for right section of the app
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
const images2 = document.querySelector(".images2").children;
const submit2 = document.querySelector(".submit2")
let result2 = document.querySelectorAll(".name2");

let index2 = 0;

// Logic for the right side section of the app
prev.addEventListener("click", () => {
    nextImage('next2');
})

next.addEventListener("click", () => {
    nextImage("prev2")
})

function nextImage(direction) {
    if (direction == "next") {
        index2++;
        console.log(index)
        if (index2 == totalImages) {
            index2 = 0;
        }
    } else {
        if (index2 == 0) {
            index2 = totalImages - 1;
        } else {
            index2--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('show');
    }
    images[index2].classList.add('show');
}

