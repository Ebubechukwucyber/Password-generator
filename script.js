//generate random values
const randNumber = () => (
    String.fromCharCode(Math.floor(Math.random() * 10) + 48)
)

const smallLetter = () => (
    String.fromCharCode(Math.floor(Math.random() * 26) + 97)
)

const bigLetter = () => (
    String.fromCharCode(Math.floor(Math.random() * 26) + 65)
)

const randSymbol = () => (
    String.fromCharCode(Math.floor(Math.random() * 15) + 33)
)

var randomValues = {
    inputNumber: randNumber,
    inputSmall: smallLetter,
    inputBig: bigLetter,
    inputSymbol: randSymbol
}


let result = document.getElementById("pwd-box")
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let pwdLength = document.getElementById("length").value
    let inputNumber = document.getElementById("numbers").checked
    let inputBig = document.getElementById("capital-letter").checked
    let inputSmall = document.getElementById("small-letter").checked
    let inputSymbol = document.getElementById("symbol").checked
     generatePassword(inputNumber, inputBig, inputSmall, inputSymbol, pwdLength)
})

function generatePassword(inputNumber, inputBig, inputSmall, inputSymbol, pwdLength) {

    const rand = [{ inputNumber }, { inputBig}, { inputSmall }, { inputSymbol }].filter(value => Object.values(value)[0])

    const randCount = inputNumber + inputBig + inputSmall + inputSymbol

    let generatedPwd ="";
    if (randCount == 0) {
        return ""
    }

    for (let i = 0; i < pwdLength; i++){

        rand.forEach((a)=> {
            const randFunc = Object.keys(a)
            generatedPwd += randomValues[randFunc]()
        })
      
    }
    result.innerText = generatedPwd.slice(0, pwdLength)
   
}

document.getElementById("clip-board").addEventListener("click", () => {
    if(result.innerText != ""){
alert("Copied to clipboard")
}else{
    alert("Password box is empty")
}
   
    const textarea = document.createElement("textarea")
    const password = result.innerText
textarea.value = password
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
textarea.remove()
}
)
