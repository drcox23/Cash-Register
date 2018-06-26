(function(){
    var test = "Hello World";
    console.log(test);

    // function testFunction(){
    //     console.log("It works");
    // };

    // var demoButton = document.getElementById('testButton');
    // demoButton.addEventListener('click', testFunction);

    var printNumbers = document.getElementsByClassName("numbers");
    var getScreen = document.getElementById('screen');
    // var addOps = document.getElementById("add");
    // var subOps = document.getElementById("subtract");
    // var multOps = document.getElementById("multiply");
    // var divideOps = document.getElementById("divide");

    var numArr = [];
    var memory = 0;
    var total = 0;
    var operator;

    // get numbers into the screen
    for (var i=0; i < printNumbers.length; i++){    
        printNumbers[i].addEventListener('click', numberScreen);
        console.log(printNumbers[i].innerHTML)
        
    }

    function numberScreen(){
        console.log('aloha');
        getScreen.innerHTML += this.innerHTML;
        
    }

    // creating an event listener for operators EXCEPT for equals
    var getOps = document.getElementsByClassName("operators");
    
    for (var i=0; i < getOps.length; i++){
        getOps[i].addEventListener('click', opActions);
        console.log(getOps[i].innerHTML)
    }

    function opActions(){
        console.log(this.id);
        // console.log(getScreen);
        memory = getScreen.innerHTML; 
        console.log(memory);
        if (this.id === "add"){
            operator = "+";
            getScreen.innerHTML = "";
        }else if (this.id === "subtract"){
            operator = "-";
            getScreen.innerHTML = "";
        }else if (this.id === "multiply"){
            operator = "x";
            getScreen.innerHTML = "";
        }else if (this.id === "divide"){
            operator = "/"
            getScreen.innerHTML = "";
        }
    }

    // activate equals operator
    var equalFunk = document.getElementById("equals");
    equalFunk.addEventListener('click', totalMe)

    function totalMe(){
        if (operator === '+'){
            var newTotal = parseFloat(memory) + parseFloat(getScreen.innerHTML);
            console.log(newTotal);
            getScreen.innerHTML = newTotal;
        } else if (operator === '-'){
            var newTotal = parseFloat(memory) - parseFloat(getScreen.innerHTML);
            console.log(newTotal);
            getScreen.innerHTML = newTotal;
        } else if (operator === 'x'){
            var newTotal = parseFloat(memory) * parseFloat(getScreen.innerHTML);
            console.log(newTotal);
            getScreen.innerHTML = newTotal;
        } else if (operator === '/'){
            var newTotal = parseFloat(memory) / parseFloat(getScreen.innerHTML);
            console.log(newTotal);
            getScreen.innerHTML = newTotal;
        }
    }

    // clearing and turning calc on and off
    var clears = document.getElementById('clear');
    clears.addEventListener('click', clearScreen);

    function clearScreen(){
        document.getElementById("screen").innerHTML = 0;
    }

    var allClear = document.getElementById('clearAll');
    allClear.addEventListener('click', clearAll);
    var allOff = document.getElementById("off");
    allOff.addEventListener('click', turnOff); 

    function clearAll(){
        document.getElementById("screen").innerHTML = 0;
        memory = 0;
        total = 0;
       
    }

    function turnOff(){
        document.getElementById("screen").innerHTML = "";
        memory = 0;
        total = 0;
       
    }

    var allOn = document.getElementById("on");
    allOn.addEventListener('click', turnOn); 

    function turnOn(){
        console.log('turn it on');

    }

    


})();


