$(document).ready(function(){




console.log(moment().format('hA'));

//  document.querySelector(".display-3").textContent = "hello";


let updateHour = function () {
    let date = moment().dayOfYear()
    let yearHours = date * 24
    let todayHours = moment().hour();
    let sumHours = yearHours + todayHours
    $("#hours").text(sumHours)
}
updateHour();
setInterval(updateHour, 1000);

// $("h2").text("hi"); 

$("#currentDay").text(moment().format('dddd,MMM Do'));

moment().format('MMMM Do YYYY, h:mm:ss a');

//change the color
var time =[9,10,11,12,13,14,15,16,17,18];
var classIds = ['#9','#10','#11','#12','#13','#14','#15', '#16','#17','#18'];
var present=parseInt(moment().format('h'));
console.log(present);
// for(i=0;
//      i<present.time; i++){
//     console.log("loop");
//     console.log(parseInt($('#9')));
// //     if(time[i] === parseInt(classIds[i])){
// // $(".textarea" ).add( document.getElementsByTagName( "textarea" )[ i ] )
// //   .css( "background-color", "red" );
// //     }
// }

if(9==present){
    $(".textarea" ).add( document.getElementsByTagName( "textarea" )[ 0 ] )
  .css( "background-color", "red" );
    
}

if(10>present){
    $(".textarea" ).add( document.getElementsByTagName( "textarea" )[ 1 ] )
  .css( "background-color", "gray" );
    
}
console.log(present);
console.log($("#9").text());
// if ( $("#") == present) {
// $(".textarea").text("present");
// console.log("present time is working")
// };
// var past = present -1
// console.log(past)
// if ($("#9").text() == past) {
//     html.find('textarea').change("#present");
//     console.log("past time is working")
//     };
// var future = present +1
// if ($(".hour").text() == present) {
//         $(".textarea").text("present");
//         console.log("future time is working")
//         };
// function togglePast() {$("div.textarea.j").replaceWith(".past")};


// for(i=0; i<time.length; i++) {
// if (i < present && parseInt(classIds)===i) {
//     console.log("past time is working");
//      console.log(this);
//     $(".textarea").add.class("present");


// togglePast();
});