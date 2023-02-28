// triangle formula
function triangle() {
    input1 = GetValue("triangle-input-value1")
    input2 = GetValue("triangle-input-value2")
    calculation = (0.5 * (input1 * input2)).toFixed(2)

    ValidateInputAndShowResult("triangle-heading", input1, input2)
}

// rectangle formula
function rectangle() {
    input1 = GetValue("rectangle-input-value1")
    input2 = GetValue("rectangle-input-value2")

    calculation = (input1 * input2).toFixed(2)

    ValidateInputAndShowResult("rectangle-heading", input1, input2)
}


// parallelogram formula
function parallelogram() {
    input1 = GetValue("parallelogram-input-value1")
    input2 = GetValue("parallelogram-input-value2")
    calculation = (0.5 * (input1 * input2)).toFixed(2)

    ValidateInputAndShowResult("parallelogram-heading", input1, input2)
}

//rhombus formula
function rhombus() {
    input1 = GetValue("rhombus-input-value1")
    input2 = GetValue("rhombus-input-value2")
    calculation = (0.5 * (input1 * input2)).toFixed(2)

    ValidateInputAndShowResult("rhombus-heading", input1, input2)
}

//pentagon formula
function pentagon() {
    input1 = GetValue("pentagon-input-value1")
    input2 = GetValue("pentagon-input-value2")
    calculation = (0.5 * (input1 * input2)).toFixed(2)

    ValidateInputAndShowResult("pentagon-heading", input1, input2)
}

//ellipse formula
function ellipse() {
    input1 = GetValue("ellipse-input-value1")
    input2 = GetValue("ellipse-input-value2")
    calculation = (Math.PI * (input1 * input2)).toFixed(2)

    ValidateInputAndShowResult("ellipse-heading", input1, input2)

}