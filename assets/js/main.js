let count = 0

// calculate button of triangle
let triangleButton = FetchId('calculate-button-triangle')
triangleButton.addEventListener('click', calculateTriangle)

// calculate button of rectangle
let rectangleButton = FetchId('calculate-button-rectangle')
rectangleButton.addEventListener('click', calculateRectangle)

// calculate button of parallelogram
let parallelogramButton = FetchId('calculate-button-parallelogram')
parallelogramButton.addEventListener('click', calculateParallelogram)

// calculate button of rhombus
let rhombusButton = FetchId('calculate-button-rhombus')
rhombusButton.addEventListener('click', calculateRhombus)

// calculate button of pentagon
let pentagonButton = FetchId('calculate-button-pentagon')
pentagonButton.addEventListener('click', calculatePentagon)

// calculate button of pentagon
let ellipseButton = FetchId('calculate-button-ellipse')
ellipseButton.addEventListener('click', calculateEllipse)


// Random Color in Card Body

// card-1
let card1 = FetchId("card1")
card1.onmouseenter = function () {
    const randomNumber = Math.round(Math.random() * 16777215)
    const randomColor = "#" + randomNumber.toString(16)
    card1.style.backgroundColor = randomColor
}

let card_1 = FetchId("card1")
card_1.onmouseleave = function () {
    card_1.style.backgroundColor = "white"
}

//card_2
let card2 = FetchId("card2")
card2.onmouseenter = function () {
    const randomNumber = Math.round(Math.random() * 16777215)
    const randomColor = "#" + randomNumber.toString(16)
    card2.style.backgroundColor = randomColor
}

let card_2 = FetchId("card2")
card_2.onmouseleave = function () {
    card_2.style.backgroundColor = "white"
}

//card_3
let card3 = FetchId("card3")
card3.onmouseenter = function () {
    const randomNumber = Math.round(Math.random() * 16777215)
    const randomColor = "#" + randomNumber.toString(16)
    card3.style.backgroundColor = randomColor
}

let card_3 = FetchId("card3")
card_3.onmouseleave = function () {
    card_3.style.backgroundColor = "white"
}

//card_4
let card4 = FetchId("card4")
card4.onmouseenter = function () {
    const randomNumber = Math.round(Math.random() * 16777215)
    const randomColor = "#" + randomNumber.toString(16)
    card4.style.backgroundColor = randomColor
}

let card_4 = FetchId("card4")
card_4.onmouseleave = function () {
    card_4.style.backgroundColor = "white"
}

//card_5
let card5 = FetchId("card5")
card5.onmouseenter = function () {
    const randomNumber = Math.round(Math.random() * 16777215)
    const randomColor = "#" + randomNumber.toString(16)
    card5.style.backgroundColor = randomColor
}

let card_5 = FetchId("card5")
card_5.onmouseleave = function () {
    card_5.style.backgroundColor = "white"
}

//card_6
let card6 = FetchId("card6")
card6.onmouseenter = function () {
    const randomNumber = Math.round(Math.random() * 16777215)
    const randomColor = "#" + randomNumber.toString(16)
    card6.style.backgroundColor = randomColor
}

let card_6 = FetchId("card6")
card_6.onmouseleave = function () {
    card_6.style.backgroundColor = "white"
}