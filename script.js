$(document).ready(function(){

// dynamic time
 // Static

    // The first basic method of Moment.js is the moment() method. Use this to get today's info!
   

    // Using moment format, there are different ways that we can display todays date!

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY')
        $("#time").text(currentTime)
    }

    // Here we will get the number of hours in the year
    let updateHour = function () {
        let date = moment().dayOfYear()
        let yearHours = date * 24
        let todayHours = moment().hour();
        let sumHours = yearHours + todayHours
        // $("#hours").text(sumHours)
    }

    // Here we will get the number of minutes in the week
    // let updateMinutes = function () {
    //     let date = moment().weekday();
    //     let weekMinutes = (date * 24 * 60) + (moment().minute());
    //     // $("#minutes").text(weekMinutes);
    // }

    // // Here we will get the number of seconds in the day
    // let updateSeconds = function () {
    //     let todayHours = moment().hour();
    //     let todaySeconds = todayHours * 60 * 60;
    //     let thisSecond = moment().second();
    //     let sumSeconds = thisSecond + todaySeconds;
    //     // $("#seconds").text(sumSeconds);
    
    // }

    // let countdown = function () {

    //     // Friday
    //     let friday = moment().day("fr")._d

    //     // convert this into day of the year
    //     let fridayDate = moment(friday).dayOfYear();

    //     // This will get the milliseconds of Friday
    //     let fridayMils = fridayDate * 24 * 60 * 60 * 1000
    //     // Turn into seconds

    //     // Today
    //     // Turn into milliseconds

    //     let date = moment().dayOfYear()
    //     let yearMils = date * 24 * 60 * 60 * 1000
    //     let todayMils = moment().hour() * 60 * 60 * 1000;
    //     let thisMilsSecond = moment().second() * 1000;
    //     let thisMils = moment().millisecond();
    //     // This value should be increasing over time
    //     let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

    //     let ms = fridayMils - sumMils;
    //     $("#countdown").text(ms)
    // }

    // To initally set the times, we will call the functions
    updateTime();
    updateHour();
    // updateMinutes();
    // updateSeconds();
    // countdown();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    // setInterval(updateMinutes, 1000);
    // setInterval(updateSeconds, 1000);
    

//how does the timer work??
 var theSecond = setInterval(check, 60000);
//  variable set to setInterval(function, intervals of milliseconds 1000/1)
  function check() {
    momentCheck = moment().format('H');
    console.log(momentCheck);
  }
check(theSecond);

// console.log(moment().format('hA'));

//  document.querySelector(".display-3").textContent = "hello";


// $("h2").text("hi"); 

$("#date-my").text(moment().format());

moment().format('MMMM Do YYYY, h:mm:ss a');

//change the color
var time =[9,10,11,12,13,14,15,16,17,18];
var textIds = ['#9','#10','#11','#12','#13','#14','#15', '#16','#17','#18'];
var present=  moment().format('H'); 
// parseInt(moment().format('H:mm:ss'));
console.log("present is equal to " + present);
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
// local storage

var textInput;
console.log(allDbtns.indexOf(i));
saveArray=[];

//All the buttons,
// was going to put in a for loop but when I did I got errors
//error 1 console.log(allDbtns.indexOf(i)); is -1??
// error 2 the text input is undefined
$("#btn9a").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#9").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn9a");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn9a",saveArray);
    localStorage.setItem("#btn9a",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn10a").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#10").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn10a");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn10a",saveArray);
    localStorage.setItem("#btn10a",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn11a").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#11").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn11a");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn11a",saveArray);
    localStorage.setItem("#btn11a",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn12p").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#12").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn12p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn12p",saveArray);
    localStorage.setItem("#btn12p",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn1p").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#13").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn1p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn1p",saveArray);
    localStorage.setItem("#btn1p",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn2p").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#14").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn2p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn2p",saveArray);
    localStorage.setItem("#btn2p",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn3p").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#15").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn3p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn3p",saveArray);
    localStorage.setItem("#btn3p",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn4p").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#16").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn4p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn4p",saveArray);
    localStorage.setItem("#btn4p",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
    junction();
  
});

$("#btn5p").on("click", function(){
    alert("The paragraph was clicked.");
   
    textInput = $("#17").val();
    console.log(textInput);

    //take out old text from array, add new text
    saveArray.shift("#btn5p");
    saveArray.push(textInput);

    //take out old text from local storage, add new text
    localStorage.removeItem("#btn5p",saveArray);
    localStorage.setItem("#btn5p",saveArray);
    // console.log(localStorage.getItem("#btn9a"));
    // storedT = localStorage.getItem("#btn9a",JSON.parse(saveArray));
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