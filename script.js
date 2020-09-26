$(document).ready(function(){

//~~~~~~~~~~~~~~~~~dynamic time~~~~~~~~~~~~~~~~~~~~~~~~~~


let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY')
        $("#time").text(currentTime)
    }
updateTime();
  
 setInterval(updateTime, 1000);

$("#date-my").text(moment().format());

moment().format('MMMM Do YYYY, h:mm:ss a');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~change the color~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var time =[9,10,11,12,13,14,15,16,17,18];
var textIds = ['#9','#10','#11','#12','#13','#14','#15', '#16','#17','#18'];
var present=  moment().format('H'); 

//used 10 because that is how long the array is 
for (i=0; i< 10; i++){
//if any time is equal to now
if(time[i] == present ){
    //...change the equivalent text id's class to present
    $(textIds[i]).removeClass('future').addClass('present');
  
}
if(time[i] < present ){
    $(textIds[i]).removeClass('future').addClass('past');
}
};
allDbtns = ["#btn9a","#btn10a","#btn11a","#btn12p","#btn1p","#btn2p","#btn3p","#btn4p","#btn5p"];
console.log(allDbtns.indexOf("#btn9a"));
//~~~~~~~~~~~~local storage~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var textInput;
saveArray=[];

//All the buttons


// was going to put in a for loop but when I did I got errors
//error 1 console.log(allDbtns.indexOf(i)); is -1??
// error 2 the text input is undefined


$("#btn9a").on("click", function(){
    //what are we saving?
    textInput = $("#9").val();

    //take out old text from array, add new text
    saveArray.shift("#btn9a");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn9a",saveArray);
    localStorage.setItem("#btn9a",saveArray);
    junction();
  
});

$("#btn10a").on("click", function(){
    //what are saving??
    textInput = $("#10").val();

    //take out old text from array, add new text
    saveArray.shift("#btn10a");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn10a",saveArray);
    localStorage.setItem("#btn10a",saveArray);
    junction();
  
});

$("#btn11a").on("click", function(){
   //what are saving??
    textInput = $("#11").val();
 
    //take out old text from array, add new text
    saveArray.shift("#btn11a");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn11a",saveArray);
    localStorage.setItem("#btn11a",saveArray);
    junction();
  
});

$("#btn12p").on("click", function(){
//what are saving??
    textInput = $("#12").val();

    //take out old text from array, add new text
    saveArray.shift("#btn12p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn12p",saveArray);
    localStorage.setItem("#btn12p",saveArray);
    junction();
  
});

$("#btn1p").on("click", function(){
    //what are we saving?
    textInput = $("#13").val();

    //take out old text from array, add new text
    saveArray.shift("#btn1p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn1p",saveArray);
    localStorage.setItem("#btn1p",saveArray);
    junction();
  
});

$("#btn2p").on("click", function(){
    //what are we saving?
    textInput = $("#14").val();
    
    //take out old text from array, add new text
    saveArray.shift("#btn2p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn2p",saveArray);
    localStorage.setItem("#btn2p",saveArray);
    junction();
  
});

$("#btn3p").on("click", function(){
   
    textInput = $("#15").val();
    

    //take out old text from array, add new text
    saveArray.shift("#btn3p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn3p",saveArray);
    localStorage.setItem("#btn3p",saveArray);
    junction();
  
});

$("#btn4p").on("click", function(){
   
    textInput = $("#16").val();

    //take out old text from array, add new text
    saveArray.shift("#btn4p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn4p",saveArray);
    localStorage.setItem("#btn4p",saveArray);
    junction();
  
});

$("#btn5p").on("click", function(){

    textInput = $("#17").val();

    //take out old text from array, add new text
    saveArray.shift("#btn5p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn5p",saveArray);
    localStorage.setItem("#btn5p",saveArray);
    junction();
  
});


function junction () {
    for(i=0; i<10; i++){
$(textIds[i]).text(localStorage.getItem(allDbtns[i]));

    }
};
junction();
// local storage

});//end of document