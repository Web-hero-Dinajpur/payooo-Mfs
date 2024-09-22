function getInputFieldValueById(id) {
    const addInputValue = document.getElementById(id).value;
    const addNewValue = parseFloat(addInputValue);
    return addNewValue;
}

function getInputFieldTextById(id) {
    const addNewText = document.getElementById(id).innerText;
    const NewBalance = parseFloat(addNewText);
    return NewBalance;
}