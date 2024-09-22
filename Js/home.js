document.getElementById('add-balance-btn').addEventListener('click', function(event){
    event.preventDefault();

    const inputAddBalance = document.getElementById('add-balance').value;
    const addMoneyNumber = parseFloat(inputAddBalance);
    const inputPin = document.getElementById('input-pin').value;
    // console.log(inputAddBalance, inputPin);

    if(inputPin==='1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber + addMoneyNumber;

        document getElementById('account-balance').innerText.newBalance;
    }
    else(
        alert('plese currect your pin number')
    )
})