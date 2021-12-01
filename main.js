// Parameters for the left section of the app
// const images = document.querySelector(".images").children;



let point = document.querySelector(".point");
let index = 0;
let score = 0;

number = Math.floor(Math.random() * 10);
console.log(number);

let arr = [{
    "name": "Peregrine falcon",
    "image": "img/peregrine_falcon.jpg",
    "speed": 350
},
{
    "name": "Golden eagle",
    "image": "img/golden_eagle.jpg",
    "speed": 240
}, {
    "name": "Pigeon",
    "image": "img/pigeon.jpg",
    "speed": 140

}, {
    "name": "Cheetah",
    "image": "img/cheetah.jpg",
    "speed": 120
}, {
    "name": "Pronghorn",
    "image": "img/pronghorn.jpg",
    "speed": 98
}, {
    "name": "Springbok",
    "image": "img/springbok.jpg",
    "speed": 88

}, {
    "name": "Lion",
    "image": "img/lion.jpg",
    "speed": 81
}, {
    "name": "Wildebeest",
    "image": "img/wildbeest.jpg",
    "speed": 80
}, {
    "name": "Wild Dog",
    "image": "img/wild_dog.jpg",
    "speed": 71
}];

document.querySelector(".name").textContent = arr[0].name
document.querySelector(".image").src = arr[8].image


console.log(arr[number])



if (question = 1) {
    let question = 1;
    document.querySelector(".submit").addEventListener('click', function () {
        console.log("this is the right answer");
        score++
        document.querySelector(".container").style.backgroundColor = "#60b347"
        document.querySelector(".score").textContent = score;
        document.querySelector(".information").textContent = "The golden eagle is faster"
        question++;
    })
}


document.querySelector(".submit2").addEventListener('click', function () {
    console.log("this is the wrong answer");
    document.querySelector(".container").style.backgroundColor = "red"
    document.querySelector(".score").textContent = score;
    document.querySelector(".information").textContent = "The is slower than the golden eagle"
})



// // //

// // // Logic for the left side section of the app
// // prev.addEventListener("click", () => {
// //     nextImage('next');
// // })

// // next.addEventListener("click", () => {
// //     nextImage("prev")
// // })

// // function nextImage(direction) {
// //     if (direction == "next") {
// //         index++;
// //         console.log(index)
// //         if (index == totalImages) {
// //             index = 0;
// //         }
// //     } else {
// //         if (index == 0) {
// //             index = totalImages - 1;
// //         } else {
// //             index--;
// //         }
// //     }

// //     for (let i = 0; i < images.length; i++) {
// //         images[i].classList.remove('show');
// //     }
// //     images[index].classList.add('show');
// // }


// // // parameters for right section of the app
// // const prev2 = document.querySelector(".prev2");
// // const next2 = document.querySelector(".next2");
// // const images2 = document.querySelector(".images2").children;
// // const submit2 = document.querySelector(".submit2")
// // let result2 = document.querySelectorAll(".name2");

// // let index2 = 0;

// // // Logic for the right side section of the app
// // prev.addEventListener("click", () => {
// //     nextImage('next2');
// // })

// // next.addEventListener("click", () => {
// //     nextImage("prev2")
// // })

// // function nextImage(direction) {
// //     if (direction == "next") {
// //         index2++;
// //         console.log(index)
// //         if (index2 == totalImages) {
// //             index2 = 0;
// //         }
// //     } else {
// //         if (index2 == 0) {
// //             index2 = totalImages - 1;
// //         } else {
// //             index2--;
// //         }
// //     }

// //     for (let i = 0; i < images.length; i++) {
// //         images[i].classList.remove('show');
// //     }
// //     images[index2].classList.add('show');
// // }

