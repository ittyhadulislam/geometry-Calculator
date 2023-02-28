// Get ELement By ID common function
function FetchId(id) {
    return document.getElementById(id)
}

// get Element Value in Number common function
function GetValue(id) {
    return Number(FetchId(id).value)
}

function inputLength(id) {
    const input = FetchId(id)
    return input.value.length
}

// validation input field
function ValidateInputAndShowResult(title_id, input1, input2) {


    if (isNaN(input1) || isNaN(input2)) {
        Swal.fire(
            'Alert',
            'Cannot give Letter or Text',
            'warning'
        )
    }
    else if (input1 < 0 || input2 < 0) {
        Swal.fire(
            'Alert',
            'Cannot give Negative Number',
            'warning'
        )
    }
    else if (input1 == "" || input2 == "") {
        Swal.fire(
            'Alert',
            'Please fill the input',
            'warning'
        )
    }
    else {
        showList(title_id)
    }
}

// count number
function showList(title_id) {
    const infoArea = FetchId("info-table")

    count = count + 1

    let title = FetchId(title_id).innerText
    let result = calculation

    let tr = document.createElement("tr")
    tr.innerHTML = `
        <tr class="border-b-2 border">
            <td class="md:w-5 w-6 py-2">${count}.</td>
            <td class="w-50 py-2 text-left">${title}</td>
            <td class="w-20 py-2">${result}cm2</td>
            <td class="py-2">
                <button class="py-1 px-2 btn-primary border-none rounded text-[12px]">Convert to m2</button>
            </td>
        </tr>
        `
    infoArea.appendChild(tr)
}

// Random Color Background


