document.getElementById('add-mony-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('add-money-balance');
    const addPinNumber = getInputFieldValueById('add-pin-number');
    // console.log(addMoney);

    if(addPinNumber=== 1234){
        const NewTaxtInput = getInputFieldTextById('Account-balance');
        const newBalanceTotal = addMoney + NewTaxtInput;
        // console.log(newBalanceTotal);

        document.getElementById('Account-balance').innerText = newBalanceTotal;
    }
    else{
        alert('Failed to add the money')
    }
})