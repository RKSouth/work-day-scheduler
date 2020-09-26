$(document).ready(function(){

// dynamic time
 // Static

    // The first basic method of Moment.js is the moment() method. Use this to get today's info!
    // console.log(moment());

    // console.log(moment().format());

    // Using moment format, there are different ways that we can display todays date!

    // Current Time
    // Here we want to use setInterval to constantly update the time
    let updateTime = function () {
        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
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
    let updateMinutes = function () {
        let date = moment().weekday();
        let weekMinutes = (date * 24 * 60) + (moment().minute());
        // $("#minutes").text(weekMinutes);
    }

    // Here we will get the number of seconds in the day
    let updateSeconds = function () {
        let todayHours = moment().hour();
        let todaySeconds = todayHours * 60 * 60;
        let thisSecond = moment().second();
        let sumSeconds = thisSecond + todaySeconds;
        // $("#seconds").text(sumSeconds);
    
    }

    let countdown = function () {

        // Friday
        let friday = moment().day("fr")._d

        // convert this into day of the year
        let fridayDate = moment(friday).dayOfYear();

        // This will get the milliseconds of Friday
        let fridayMils = fridayDate * 24 * 60 * 60 * 1000
        // Turn into seconds

        // Today
        // Turn into milliseconds

        let date = moment().dayOfYear()
        let yearMils = date * 24 * 60 * 60 * 1000
        let todayMils = moment().hour() * 60 * 60 * 1000;
        let thisMilsSecond = moment().second() * 1000;
        let thisMils = moment().millisecond();
        // This value should be increasing over time
        let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

        let ms = fridayMils - sumMils;
        $("#countdown").text(ms)
    }

    // To initally set the times, we will call the functions
    updateTime();
    updateHour();
    updateMinutes();
    updateSeconds();
    countdown();

    // To continuously call the functions, we will use setInterval
    setInterval(updateTime, 1000);
    setInterval(updateHour, 1000);
    setInterval(updateMinutes, 1000);
    setInterval(updateSeconds, 1000);
    

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


// local storage
var textInput;
$("#btn9a").on("click", function(){
    alert("The paragraph was clicked.");
    textInput = $("#9").text();
    saveArray=[];
    console.log(textInput);
    saveArray.push(textInput);
    console.log(saveArray);
    // for (i=0; i<saveArray.length; i++){
    //             if (){
    //                 championScore=scoreArray[i].value;
    //                 championName=scoreArray[i].name;
    //             };
    // $("h2").text("hi");
// const initialInput = document.getElementById("initialInput");
// const lsOutput = document.getElementById("lsOutput");
// const championship = document.getElementById("championship");
       
        //need to register what button was clicked and save text area
        //keep it in the text area upon reload

// const key = initialInput.value;
//     const value = finalScore;
//     console.log("name" + key);
//     console.log("score" + value);

  
//         // creating a list score for html
//     li.textContent = key+": "+ finalScore;
//     li.setAttribute("data-index", key);
//     console.log(li.textContent);
//     lsOutput.appendChild(li);

//     //cheking high score
//     toLoad = {name:initialInput.value, value:finalScore};
//     console.log("ToLoad: " + toLoad);

//     var championName;    
//     championScore = 0;
//     scoreArray.push(toLoad);
//     for (i=0; i<scoreArray.length; i++){
//         if (scoreArray[i].value >= championScore){
//             championScore=scoreArray[i].value;
//             championName=scoreArray[i].name;
//         };

//     console.log("champion score: " + championScore);
//         // creating champion score
//         championship.textContent = championName + ": "+ championScore;
//         championship.setAttribute("data-index", key);
//         console.log(championship.textContent);
    

//     };
//     console.log("scoreArray: " + scoreArray[0]);
});
// local storage

});//end of document