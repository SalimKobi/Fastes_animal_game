// Parameters for the left section of the app
document.querySelector(".submit2")
document.querySelector(".information").textContent = "Let's get started"
document.querySelector(".next").classList.add("display");



function displayNext() {
    const nextButton = document.querySelector(".next");
    nextButton.classList.remove("display");
    nextButton.addEventListener('click', genrateNumImg);
};

// functions that disables buttons 

//disable the right button
function disablebtn() {
    document.querySelector(".submit2").disabled = true;
    document.querySelector(".next").style.backgroundColor = "#71797E";
}
//disable the left button
function disablebtn2() {
    document.querySelector(".submit").disabled = true;
    document.querySelector(".next").style.backgroundColor = "#71797E";
}

//disable the two buttons 
function disableAllbtn() {
    document.querySelector(".submit2").disabled = true;
    document.querySelector(".submit").disabled = true;
}

//enable the two buttons 
function enableAllbtns() {
    document.querySelector(".submit2").disabled = false;
    document.querySelector(".submit").disabled = false;
    document.querySelector(".container").style.backgroundColor = "grey";
}

let point = document.querySelector(".point");

// const images = document.querySelector(".images").children;


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


// 
function getRand() {
    let min = 0;
    let max = arr.length;
    let rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}

// Generate randon numbers for the left and right images 
// numberLeft = getRand();
// numberRight = getRand();

// function generating random numbers 
// function generateNum(){
//     numberLeft = getRand();
//     numberRight = getRand();
// }


function genrateNumImg() {
    document.querySelector(".next").classList.add("display");

    numberLeft = getRand();
    numberRight = getRand();

    while (numberLeft === numberRight){
        numberLeft = getRand();
        numberRight = getRand();
    }

    if (numberLeft !== numberRight) {
        //Genrating randon images 
        document.querySelector(".image").src = arr[numberLeft].image
        document.querySelector(".name").textContent = arr[numberLeft].name
        document.querySelector(".image2").src = arr[numberRight].image
        document.querySelector(".name2").textContent = arr[numberRight].name
        enableAllbtns()
    }

}


function Next() {
    console.log('Next invoked');
    numberLeft = getRand();
    numberRight = getRand();
    let score = 0;

    while (numberLeft === numberRight){
        numberLeft = getRand();
        numberRight = getRand();
    }

    if (numberLeft !== numberRight) {
        //Genrating randon images 
        document.querySelector(".image").src = arr[numberLeft].image
        document.querySelector(".name").textContent = arr[numberLeft].name
        document.querySelector(".image2").src = arr[numberRight].image
        document.querySelector(".name2").textContent = arr[numberRight].name
        // Adding actions if the user clicks on the first button
        document.querySelector(".submit").addEventListener('click', function () {
            disableAllbtn();
            displayNext()
            if (arr[numberLeft].speed > arr[numberRight].speed) {
                document.querySelector(".container").style.backgroundColor = "#60b347";
                score++;
                document.querySelector(".score").textContent = score;

            } else {
                document.querySelector(".container").style.backgroundColor = "red";
            }
        })

        //Adding actions if the user clicks on the first button
        document.querySelector(".submit2").addEventListener('click', function () {
            disableAllbtn();
            displayNext()
            if (arr[numberRight].speed > arr[numberLeft].speed) {
                document.querySelector(".container").style.backgroundColor = "#60b347";
                score++;
                document.querySelector(".score").textContent = score;

            } else {
                document.querySelector(".container").style.backgroundColor = "red";
            }
            // console.log(score);
        })
        // console.log(score);

    }
    // document.querySelector(".score").textContent = score;
    document.querySelector(".next").classList.add("display");
    enableAllbtns()

}
//TRIAL TRIAL TRIAL TRIAL TRIAL TRIAL TRIAL TRIAL

Next();

// function getR() {
//     let min = 0;
//     let max = arr.length;
//     let rand = Math.floor(Math.random() * (max - min) + min);
//     return rand;
// }
// numberA = getR();
// numberB = getR();

// while (numberA === numberB) {
//     numberA = getR();
//     numberB = getR();

// }
// console.log(numberA)
// console.log(numberB)


















        // document.querySelector(".name").textContent = arr[numberLeft].name

        // console.log(numberLeft)







//CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC
// if (question = 1) {
//     let question = 1;
//     document.querySelector(".submit").addEventListener('click', function () {
//         console.log("this is the right answer");
//         score++
//         document.querySelector(".container").style.backgroundColor = "#60b347"
//         document.querySelector(".score").textContent = score;
//         document.querySelector(".information").textContent = "The golden eagle is faster"
//         question++;
//     })
// }


// document.querySelector(".submit2").addEventListener('click', function () {
//     console.log("this is the wrong answer");
//     document.querySelector(".container").style.backgroundColor = "red"
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".information").textContent = "The is slower than the golden eagle"
// })
// CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC CONSULT THIS TO BUILD LOGIC 



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

