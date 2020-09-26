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
var textIds = ['#9','#10','#11','#12','#13','#14','#15', '#16','#17','#18'];
var present= parseInt(moment().format('H'));
console.log(present);

for (i=0; i< 10; i++){
if(time[i] == present ){
    $(textIds[i]).removeClass('future').addClass('present');
}
if(time[i] < present ){
    $(textIds[i]).removeClass('future').addClass('past');
}
};

//  for (i=0; i< time[10]; i++){
// if(i==present){

//    $('.future').removeClass('future').addClass('present');
//    $('.past').removeClass('past').addClass('present');
// } else( console.log("false")) };
// for (i=0; i< time[9]; i++){
// if(i>present){

//     $('.past').removeClass('future').addClass('future');
// }
// };

console.log(present);
console.log($("#10"));

});//end of document