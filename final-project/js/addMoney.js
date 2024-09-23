document.getElementById('add-mony-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('add-money-balance');
    const addPinNumber = getInputFieldValueById('add-pin-number');
    // console.log(addMoney);

    if(isNaN(addMoney)){
        alert('Failed to your add money');
        return;
    }

    if (addPinNumber === 1234) {
        const NewTaxtInput = getInputFieldTextById('Account-balance');
        const newBalanceTotal = addMoney + NewTaxtInput;

        document.getElementById('Account-balance').innerText = newBalanceTotal;

        // second history section 
        const p = document.createElement('p');
        p.innerText = `Added ${addMoney} Total New Balance ${newBalanceTotal}`;
        // console.log(p)
        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('Failed to add the money')
    }
})