const modUppercase = document.getElementById("check1"),
    modLowercase = document.getElementById("check2"),
    modNumbers = document.getElementById("check3"),
    modSymbols = document.getElementById("check4"),
    inputResult = document.getElementById("result"),
    buttonResult = document.getElementById("build"),
    inputRange = document.getElementById("inputRange"),
    inputScreen = document.getElementById("inputScreen"),
    error = document.getElementById("error"),
    copy = document.getElementById("copy");

updateScreen = () => {
    inputScreen.value = inputRange.value;
    updateValue();
}

updateRange = () => {
    inputRange.value = inputScreen.value;
    updateValue();
}

updateValue = () => {
    if (inputScreen.value > 100)
        inputScreen.value = 100;
    else if (inputScreen.value < 1)
        inputScreen.value = 1;
}

getDataMod = () => {
    let modDataStart = [modUppercase, modLowercase, modNumbers, modSymbols],
        modDataFinal = [];

    for (let i = 0; i < modDataStart.length; i++)
        modDataFinal[i] = modDataStart[i].checked ? true : false;

    return modDataFinal;
}

getfinalData = (data) => {
    finalData = []
    if (data[0] == true)
        finalData.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    if (data[1] == true)
        finalData.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')
    if (data[2] == true)
        finalData.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    if (data[3] == true)
        finalData.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')')

    return finalData;
}

function build() {
    let password = "";

    while (password.length < inputRange.value)
        password += getfinalData(getDataMod())[Math.floor(Math.random() * getfinalData(getDataMod()).length)]
    if (password.includes(undefined)) {
        error.style.opacity = '1';
        inputResult.value = "";
    }
    else {
        inputResult.value = password;
        error.style.opacity = '0';
    }
}

copy.addEventListener('click', () => {
    inputResult.select();
    document.execCommand('copy');
});

buttonResult.addEventListener("click", build);