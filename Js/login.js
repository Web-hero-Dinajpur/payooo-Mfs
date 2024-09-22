document.getElementById('nmbr-btn').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('Phn-nmbr').value;
    const pinnumber = document.getElementById('pin-nmbr').value;
    
    console.log(phoneNumber);
    console.log(pinnumber);
})