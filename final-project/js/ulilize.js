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

function getShowHistoryById(id){
    //hide all the section
    document.getElementById('Add-money-section').classList.add('hidden');
    document.getElementById('cash-Out-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    //show the section with the provide id as parameter

    document.getElementById(id).classList.remove('hidden');
}