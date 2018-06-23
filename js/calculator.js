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
    var numArr = [];

    for (var i=0; i < printNumbers.length; i++){    
        printNumbers[i].addEventListener('click', numberScreen);
        console.log(printNumbers[i].innerHTML)
        
    }

    function numberScreen(){
        console.log('aloha');
        getScreen.innerHTML += this.innerHTML;
        
    }

    





})();


