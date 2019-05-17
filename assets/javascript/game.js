$(document).ready(function () {
    var wins;
    var losses;
    // var randomResult;
    var currentNum=0;

    //makes random Result a function that finds a random number
    var randomResult = function getRandNumToGuess(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
       
    }
    //grabs the numberdiplay ID from the Html and calls on the 
    //randomResult as the content of the ID
    $("#numberDisplay").html(randomResult(19, 120))


    //Runs a loop 4 times in order to create divs for the crystals
    //it then makes a random number variable from 1-12 and stores that in 
    //crystal <div>
    for (i = 0; i < 4; i++) {

        var crystalRandomNum = Math.floor(Math.random() * 11) + 1;
        console.log(crystalRandomNum)
        var crystal = $("<div>")
        crystal.attr({
            "class": "crystal",
            "randomNumData": crystalRandomNum
            
        })
        $(".crystals").append(crystal)
    }
        


        //ON CLICK it makes a variable called crystal number and grabs the randomNumData
        //which holds the crystalRandomNum variable and turns that into a number
        //it then adds the currentNum variable to the crystal number variable I created
        $(".crystal").on("click", function () {

            
            var crystalNum = parseInt($(this).attr("randomNumData"));
            
            currentNum += crystalNum

            if(currentNum >randomResult){
                console.log("You Lose")
            }
            else if(currentNum===randomResult){
                console.log("Winner")
            }

            console.log(currentNum)
        })
    



    // function initializeGame(){
    //     $("#wins")





    // console.log(getRandNumToGuess(9, 120))








});