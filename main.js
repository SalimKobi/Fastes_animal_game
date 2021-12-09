// Parameters for the left section of the app
document.querySelector(".submit2")
document.querySelector(".information").textContent = "Score 5 points in 5 attempts to win!"
document.querySelector(".next").classList.add("display");
let clickNo = 0;
let attempt = 5


function win() {
    document.querySelector(".container").style.backgroundColor = "#60b347";
    document.querySelector(".playerStat").textContent = "Congratulations you won 🎉"
}

function lose() {
    document.querySelector(".container").style.backgroundColor = "red";
    document.querySelector(".playerStat").textContent = "Sorry you lost 😢"
}

function WinOrLose() {
    document.querySelector(".playerStat").style.color = "white"
    document.querySelector(".playerStat").style.fontSize = "5rem"
    document.querySelector(".image").classList.add("display");
    document.querySelector(".image2").classList.add("display");
    document.querySelector(".submit2").classList.add("display");
    document.querySelector(".submit").classList.add("display");
    document.querySelector(".name").classList.add("display");
    document.querySelector(".name2").classList.add("display");
    document.querySelector(".points").classList.add("display");
    document.querySelector(".next").classList.add("display");
}

function displayNext() {
    const nextButton = document.querySelector(".next");
    nextButton.classList.remove("display");
    nextButton.addEventListener('click', genrateNumImg);
};

// Functions that disables buttons 

//disable the right button
function disablebtn() {
    document.querySelector(".submit2").disabled = true;
    document.querySelector(".submit2").style.backgroundColor = "#71797E";
    document.querySelector(".submit").style.backgroundColor = "#71797E";
}
//disable the left button
function disablebtn2() {
    document.querySelector(".submit").disabled = true;
    document.querySelector(".submit").style.backgroundColor = "#71797E";
    document.querySelector(".submit2").style.backgroundColor = "#71797E";
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
    "name": "Wolf",
    "image": "img/wild_dog.jpg",
    "speed": 60
}, {
    "name": "Ostritch",
    "image": "img/ostritch.jpg",
    "speed": 70
}, {
    "name": "Jaguar",
    "image": "img/jaguar.jpg",
    "speed": 80
}, {
    "name": "Tiger",
    "image": "img/Tiger.jpg",
    "speed": 65
}];


// 
function getRand() {
    let min = 0;
    let max = arr.length;
    let rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}


function genrateNumImg() {
    document.querySelector(".submit2").style.backgroundColor = "#111827";
    document.querySelector(".submit").style.backgroundColor = "#111827";
    attempt--;
    document.querySelector(".information").textContent = `You have ${attempt} attempts remaining`
    document.querySelector(".next").classList.add("display");
    numberLeft = getRand();
    numberRight = getRand();

    while (numberLeft === numberRight) {
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

    while (numberLeft === numberRight) {
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
            clickNo++;
            console.log(clickNo)
            disableAllbtn();
            displayNext()
            if (arr[numberLeft].speed > arr[numberRight].speed) {
                score++;
                if (clickNo === 5) {
                    console.log("click is up to 5")
                    if (score > 4) {
                        WinOrLose()
                        win()
                    } else {
                        WinOrLose()
                        lose()
                        console.log("you lost")
                    }
                } else {
                    document.querySelector(".container").style.backgroundColor = "#60b347";
                    document.querySelector(".score").textContent = score;
                    document.querySelector(".information").textContent = `The ${arr[numberLeft].name} moves at ${arr[numberLeft].speed}km/hr while the ${arr[numberLeft].name} moves at ${arr[numberLeft].speed}km/hr`
                }
            } else {
                if (clickNo === 5) {
                    console.log("click is up to 5")
                    WinOrLose()
                    lose()
                } else {
                    document.querySelector(".container").style.backgroundColor = "red";
                    document.querySelector(".information").textContent = `The ${arr[numberLeft].name} moves at ${arr[numberLeft].speed}km/hr while the ${arr[numberRight].name} moves at ${arr[numberRight].speed}km/hr`
                }

            }

        })

        //Adding actions if the user clicks on the first button
        document.querySelector(".submit2").addEventListener('click', function () {
            clickNo++;
            console.log(clickNo)
            disableAllbtn();
            displayNext()
            if (arr[numberRight].speed > arr[numberLeft].speed) {
                score++;
                if (clickNo === 5) {
                    console.log("click is up to 5")
                    if (score > 4) {
                        WinOrLose()
                        win()
                    } else {
                        lose()
                        WinOrLose
                        console.log("you lost")
                    }
                } else {
                    document.querySelector(".container").style.backgroundColor = "#60b347";
                    document.querySelector(".score").textContent = score;
                    document.querySelector(".information").textContent = `The ${arr[numberRight].name} moves at ${arr[numberRight].speed}km/hr while the ${arr[numberLeft].name} moves at ${arr[numberLeft].speed}km/hr`
                }
            } else {
                if (clickNo === 5) {
                    console.log("click is up to 5")
                    lose()
                    WinOrLose()
                } else {
                    document.querySelector(".container").style.backgroundColor = "red";
                    document.querySelector(".information").textContent = `The ${arr[numberRight].name} moves at ${arr[numberRight].speed}km/hr while the ${arr[numberLeft].name} moves at ${arr[numberLeft].speed}km/hr`
                }

            }
        })


    }
    // document.querySelector(".score").textContent = score;
    document.querySelector(".next").classList.add("display");
    enableAllbtns()


}


Next();

