$(document).ready(function () {
    var wins = 0;
    var randomResult;
    var loss = 0;
    // var randomResult;
    var currentNum = 0;

    var crystalImages = [
        "assets/images/crystalCollector1.jpg",
        "assets/images/crystalCollector2.jpg",
        "assets/images/crystalCollector3.jpg",
        "assets/images/crystalCollector4.jpg"
    ]

    var initializeGame = function () {

        //emptys the crystal attribute to restart game

        $(".crystals").empty()

        //This  sets the value of randomResult to a random number from 19-120
        randomResult = Math.floor(Math.random() * 120) + 19
        console.log("random number ="+ randomResult)
        

        
        //grabs the numberdiplay ID from the Html and calls on the 
        //randomResult as the content of the ID
        $("#numberDisplay").html(randomResult)
        // (19,120)

        //Runs a loop 4 times in order to create divs for the crystals
        //it then makes a random number variable from 1-12 and stores that in the
        //crystal <div> I created
        for (i = 0; i < 4; i++) {

            var crystalRandomNum = Math.floor(Math.random() * 11) + 1;


            var crystal = $("<div>")
            crystal.attr({
                "class": "crystal",
                "randomNumData": crystalRandomNum

            })
            

            crystal.css({
                "background-image": "src('"+ crystalImages[i] +"')",

            })

            $(".crystals").append(crystal)
        }
        $("#totalScore").html(currentNum)
    }

    initializeGame()





    //ON CLICK it makes a variable called crystal number and grabs the randomNumData
    //which holds the crystalRandomNum variable and turns that into a number
    //it then adds the currentNum variable to the crystal number variable I created
    $(document).on("click", ".crystal", function () {


        var crystalNum = parseInt($(this).attr("randomNumData"));

        currentNum += crystalNum

        $("#totalScore").html(currentNum)

        if (currentNum > randomResult) {
            loss++
            $("#losses").html(+loss)
            currentNum = 0
            console.log("Losses= " + loss)
            alert("You Lose")
            initializeGame()

        }
        else if (currentNum === randomResult) {
            wins++

            $("#wins").html(wins)
            console.log("Wins= " + wins)
            currentNum = 0
            alert("You Win")
            initializeGame()
        }



    })




    // function initializeGame(){
    //     $("#wins")





    // console.log(getRandNumToGuess(9, 120))








});