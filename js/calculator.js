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

    for (var i=0; i < printNumbers.length; i++){    
        printNumbers[i].addEventListener('click', numberScreen);
        console.log(printNumbers[i].innerHTML)
        
    }

    function numberScreen(){
        console.log('aloha');
        getScreen.innerHTML += this.innerHTML;
        
    }

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
    
        // if (this.id === "equals"){
        //     if (operator === "+"){
        //         var total = memory + getScreen.innerHTML;
        //         console.log(total);
        //     }
        // }

        // console.log(operator);
        // console.log(memory); 
        
    }

    
    var equalFunk = document.getElementById("equals");
    equalFunk.addEventListener('click', totalMe)

    function totalMe(total){
        total = getScreen.innerHTML
        if (operator === '+'){
            var newTotal = memory + total;
            console.log(newTotal);
        }
    }





})();


