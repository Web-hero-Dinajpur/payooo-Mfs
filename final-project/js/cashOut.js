document.getElementById('Cash-Out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('cash out button')

    const CashOutBalance = getInputFieldValueById('money-balance-cashout');
    const cashOutPinNumer = getInputFieldValueById('pin-number-cashout');
    // console.log(CashOutBalance, cashOutPinNumer);

    if(isNaN(CashOutBalance)){
        alert('Failed to cash out');
        return;
    }

    if (cashOutPinNumer === 1234) {
        const cashOut = getInputFieldTextById('Account-balance');

        if(CashOutBalance > cashOut){
            alert('you do not have enough money to cash out');
            return ;
        }

        const cashOutTotal = cashOut - CashOutBalance;
        console.log(cashOutTotal);
        document.getElementById('Account-balance').innerText = cashOutTotal;

        // chashOut history 
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerText = `        
                 CashOut ${CashOutBalance} Withdrow balance ${cashOutTotal}`;

        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('worng pin plase right now')
    }
})