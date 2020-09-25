console.log(moment().format('hA'));
//  document.querySelector(".display-3").textContent = "hello";

// $("h2").text("hi"); 

$("#currentDay").text(moment().format('dddd,MMM Do'));

moment().format('MMMM Do YYYY, h:mm:ss a');

//change the color

var present=parseInt(moment().format('hA'));
console.log(present);
console.log($("#9").text());
if ( $("").text()) == present) {
$(".textarea").text("present");
console.log("present time is working")
};
var past = present -1
if ($(".hour").text() == past) {
    $(".textarea").text("past");
    console.log("past time is working")
    };
var future = present +1
if ($(".hour").text() == present) {
        $(".textarea").text("present");
        console.log("future time is working")
        };