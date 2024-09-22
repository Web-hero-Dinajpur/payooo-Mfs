document.getElementById('show-add-money-form').addEventListener('click', function(){
    // console.log('show add money button click')
    getShowHistoryById('Add-money-section');

})
document.getElementById('show-cash-out-form').addEventListener('click', function(){
    getShowHistoryById('cash-Out-section');
})

document.getElementById('show-transfar-form').addEventListener('click', function(){
    getShowHistoryById("transaction-section");
})