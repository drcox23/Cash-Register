(function(){
    var testing = 'cash-reg test';
    console.log(testing);

    var balance = 0
    var getScreen2 = document.getElementById('screen');

    // deposit cash
    var deposit = document.getElementById('deposit');
    deposit.addEventListener('click', depositCash);

    function depositCash(){
        balance += parseFloat(getScreen2.innerHTML);
        getScreen2.innerHTML = 0;
        console.log(balance);
    }

    // withdraw cash
    var withdraw = document.getElementById('withdraw');
    withdraw.addEventListener('click', withdrawCash);

    function withdrawCash(){
        if (getScreen2.innerHTML <= balance){
        balance -= parseFloat(getScreen2.innerHTML);
        getScreen2.innerHTML = 0;
        console.log(balance);
    } else {
        getScreen2.innerHTML = "error";
    }
    }

    var viewBalance = document.getElementById('balance');
    viewBalance.addEventListener('click', seeBalance);

    function seeBalance(){
        getScreen2.innerHTML = balance;
    }
    



})();