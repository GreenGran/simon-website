var playing = false;
var patternArry = [];
var playerArry = [];
var playerMoves = 0;
var greenSound = new Audio('sound/green.ogg');
var redSound = new Audio('sound/red.ogg');
var yellowSound = new Audio('sound/yellow.ogg');
var blueSound = new Audio('sound/blue.ogg');
var wrongSound = new Audio('sound/wrong.ogg');



var waiting = false;

window.dispatchEvent(new KeyboardEvent('keydown', {
    'key': 'a'
  }));
  //if(start playing button pressed)
 

$(document).on("keypress", function (e){
    console.log(e.key);
    if(e.key.toLowerCase() == "a" && playing == false){
       
            playing = true;
            console.log("start game !");
        $("#level-title").text("Score:");
        roundStart();
       
       
    }
    if(e.key.toLowerCase() == "r" && playing == true ){
        
      
   
    }

});

$(".playButton").on("click",function(e){
   if(playing && !waiting){
    buttonPressed(e);
        
    }

});


function buttonPressed(e){
    playerMoves++;
    

    playerArry.push(playerMovesToNumbers(e.target.id));
    //console.log("player arry len"+playerArry.length);
    //console.log("PC arry len"+patternArry.length);
    //console.log("player at len: "+playerArry[playerArry.length-1]+ " pc at len: "+patternArry[playerArry.length-1]);
    if(playerArry[playerArry.length-1]!=patternArry[playerArry.length-1])
    {

        $("#"+e.target.id).addClass( "pressedButton" );
    setTimeout(function(){
        $("#"+e.target.id).removeClass( "pressedButton" );
    },100);

    $("#"+e.target.id).addClass( "wrongBtn" );
     setTimeout(function(){
        $("#"+e.target.id).removeClass( "wrongBtn"  );
        wrongSound.play();
        alert("you lose. your score is "+(patternArry.length -1)+", press 'a' after the refreash to start again");
        document.location.reload();
    },100);
        
       
        
    }else{
        switch (e.target.id) {
            case "greenBtn":
                greenSound.play();
                break;
            case "redBtn":
                redSound.play();
                break;
            case "yellowBtn":
                yellowSound.play();
                break;
            case "blueBtn":
                blueSound.play();
                break;    
            
        }
        $("#"+e.target.id).addClass( "pressedButton" );
        setTimeout(function(){
            $("#"+e.target.id).removeClass( "pressedButton" );
        },100);
    
        $("#"+e.target.id).addClass( e.target.id+"Play" );
         setTimeout(function(){
            $("#"+e.target.id).removeClass( e.target.id+"Play"  );
        },100);
       
    }
   

    if(playerMoves == patternArry.length)
    {
        //waiting = true;
        roundStart();
        playerMoves= 0;
        playerArry = [];
    }
}
function roundPlaying(){
    
}

function roundStart(){
    waiting = true;
    console.log("round start");
    patternArry.push(Math.floor(Math.random() * 4));
    
    $("#level-title").html("Score:"+(patternArry.length -1)+"<br>press 'r' to restart");
    console.log("arry at 0:"+patternArry[0]);
    /*
    console.log("patternArry: "+patternArry[0]);
    for (var i = 0; i < patternArry.length; i++) {  
        setTimeout(function(){
            buttonIndex = i;
            console.log("buttonIndex: "+buttonIndex);
            console.log("patternArry: "+patternArry[buttonIndex]);
            playButton(patternArry[buttonIndex]);
        },1000 * (i));
    }
    */
  
   
   mySleep(patternArry,0);
   

}
function mySleep(patternArry,i){
    
    setTimeout(function(){
        
       // console.log("i:"+i);
        //console.log("arr.lenght:"+patternArry.length);
        
       // console.log("arry at i:"+patternArry[i]);
        if(patternArry.length == i+1)//chacks if its onlest button press then activates or de-activate buttons
        {
            playButton(patternArry[i],true);
            //console.log("TRUE");
        }
        else{
            playButton(patternArry[i],false);
           // console.log("FALSE");
        }
        
        i++; 
        if(i<patternArry.length){
            mySleep(patternArry,i);
        }
        
        

    }, 500);
    
}

function playerMovesToNumbers(id){
 
    switch (id) {
        case "greenBtn":
            return 0;
            break;
        case "redBtn":
            return 1;
            break;
        case "yellowBtn":
            return 2;
            break;
        case "blueBtn":
            return 3;
            break;
    
    }
}

function playButton(btnNumber,waitingFlag)
{
   // console.log("in play button:"+btnNumber);
    switch (btnNumber) {
        case 0:
            greenSound.play();
            PCButtonPress("greenBtn");
            break;
        case 1:
            redSound.play();
            PCButtonPress("redBtn");
            break;
        case 2:
            yellowSound.play();
            PCButtonPress("yellowBtn");
            break;
        case 3:
            blueSound.play();
            PCButtonPress("blueBtn");
            break;
    
    }
    if(waitingFlag == true)
    {
        waiting = false;
    }
}
function PCButtonPress(TargetId)
{

    //console.log("id is: "+"#"+TargetId);
    $("#"+TargetId).addClass( "pressedButton" );
    setTimeout(function(){
        $("#"+TargetId).removeClass( "pressedButton" );
    },100);

    $("#"+TargetId).addClass( TargetId+"Play" );
     setTimeout(function(){
        $("#"+TargetId).removeClass( TargetId+"Play"  );
    },100);
}

    


