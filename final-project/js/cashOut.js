document.getElementById('Cash-Out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('cash out button')

    const CashOutBalance = getInputFieldValueById('money-balance-cashout');
    const cashOutPinNumer = getInputFieldValueById('pin-number-cashout');
    console.log(CashOutBalance, cashOutPinNumer);

    if(cashOutPinNumer=== 1234){
        const cashOut = getInputFieldTextById('Account-balance');
        const cashOutTotal = cashOut - CashOutBalance;
        console.log(cashOutTotal);
        document.getElementById('Account-balance').innerText = cashOutTotal;
    }
    else{
        alert('worng pin plase right now')
    }
})