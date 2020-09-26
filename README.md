# work-day-scheduler
A simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.


Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

<!-- Read Me template -->

#  JavaScript: Password Generator

### The goal of this project is to make a randomly generated password that a range of selected user criteria and allows them to smoothly and easily get a fresh and secure password. 

![Password Generator](Assets/Workdayimg01.png)

## Table of Contents
* [Technologies Used](Technologies_Used)
* [Deployed Site](Deployed)
* [Features](Features)
* [Usage](Usage)
* [Author](Author)
* [Credits](Credits)
* [License](License)

## Technologies_Used
* HTML (27.3%)
* CSS (16.4%)
* Javascript (56.3%)

## Deployed Site
[Responsive Portfolio](https://rksouth.github.io/work-day-scheduler/)

## Features 


__1.A dynamic timer that shows the current date__
 
_Why?_

    A planner app that isn't at least a little dynamic is not really more useful than a peice of paper and a pen. Plus this planner is for tracking time and keeping on top of things, not for checking things off. So, having it change color with the time of day is important in order to help the user know what they should be doing at a paticular hour.

_What?/How?_

   ![How?-Prompts](Assets/Workdayimg-05.png)

  I was fortunent in this project to have a template to work from. I used the site moment.js and their app example as a starting point. Then, I took at all the parts I was sure I didn't need, followed by the parts that I thought I might not need. I build my own secondary function to check my understanding before I narrowed it down to this snippet of code. 

  The first function updates the time date regularly on the screen. Even if the users forgets to close the app before they go home for the night, it will still work for them dynamically. It writes the date directly from moment.js to the html using the moment.js format. setting any variable within the update time function and setting the interval with setInterval will update it. I chose to update it once a minute, that way the user won't miss a beat. 

__2. Color changing text areas based on time__

_Why?_
    One of the best ways to indicate anything in design is by use of color. Simple, dynamic and easy to understand at a glance. We don't want users having to think too hard about how the design works, we want them to use it naturally. 


_What?/How?_
	
    In order to change the colors I build two arrays, one that contained a number and one that contained a string (the id's of the textbox in the html). I also created a variable that I set to extract the time from moment.js. 

![How? -Color Change](Assets/Workdayimg-06.png)

I created a series of while loops and if/else (conditional) statements that look for a boolean (true or false) of happyYet if we aren't happy Yet then we create more prompts/alerts. Each time a new loop on a new condition runs, happy Yet is reset and we have to use the conditional statement to turn it back to true. This is nested in yet another loop that checks if there are any yes statements. In this way we never leave anyone behind. Wrapping the major criteria (all except the password length) in another loop ensures that the user has to have some criteria. If they were to select no for everything then there woud be no way to generate a password. 

Although it is not pictures, if you were to check the console log as you were making selections through the prompt you would see it logging the various selections made by the user. If for some reason the program broke or wasn't generating the kind of password intended this would show you where it may have gone and if the user misselected something. In future versions I would like to display the selections on the page to allow the user to confirm these things without having to use the console log. 

__3. The ability to store data even when the page is closed__

_Why?_

If you are going to create something it really should meet all the criteria, shouldn't it? I don't want to create a password generator that doesn't do what it promises to do.



_What?/How?_

   As far as I can tell with my code, aside from making sure things are validated using a series of prompts there are two things that are integral to creating a good password within this code. 

* ' var chars = uCase + lCase + sChar + num;

  pass = "";
  for (var x = 0; x < length; x++) {
      var i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
  }'

    The chars variable concatinates all of the peices of the user specified criteria and then randomizes from those groups until the selection length is reached.

* 'isAY = false ;
  while (isAY == false) {
    if (pwUpper == 'y' || pwLower == 'y' || pwSpecial == 'y' || pwNumber == 'y') 
  {
    isAY = true
  } else {
    alert("Please select at least one time of character with a y, unless you don't really want a password.")
  }
}'

    This code does not allow the users to get away without using a y by using the conditional statement to see if any y's were used else, produce an alert and go back to the beginning until isAY is set to true.


__4. A button__


_Why?_

I suppose we need a button to get started on the prompts. It is pretty annoying when you open a webpage and a prompt immediately comes up without you asking it to. The button allows to loop through as well. We can start and then if we need to we can start all over again. It will rewrite passwords to our hearts content.

_What?How?_

There are 3 seperate parts of a button in java script that connect to an additional part in html. 

in html are code looks like this:

'<button id="generate" class="btn">Generate Password</button>'

It contains an id, a class and a area all ecompassed in it's very own special button tag.

There are two ways to call a button and make it work in Javascript but I will only explain the way I did it.

First, I created a variable called generateBtn. I then set it equal to 'document.querySelector("#generate");' The #generate refers back to the id given in the html. We now have that very vital connection where our button is going to begin to think about doing a thing.

Second step is to make content -I need something for this button to do so when the button is pushed it needs to write to the document (html) in the text area called (id) password. This is is where our password will show up. We use the variable, pass to hold the password. 
'document.getElementById('password').value = pass;'


'generateBtn.addEventListener("click", writePassword);'

Finally, we have to tell the button to listen. What to listen for? A click! What are we doing upon click? writing the password!	
   
    
__5. Other/Potentional Complaints__

* All the colors in the CSS are green

_Why?_

In my working experience, the folks that need extra secure passwords are also the ones that need to relax. I chose to edit the CSS  to create a calmer color pallete that would easy on the eyes for those working in stressful environments. I know it might be a huge stretch but I would hope that if someone comes to my site and generates a new password that they might enjoy the calm refreshing green I chose, they might feel renewed in their work and ready to acheive great things with sensitive data. 

* I used prompts instead of confirm statements

_Why?_

Mainly because prompts were specifically requested. However, using a yes or no might be simpler in the long run. 

* There are not that many commits

_Why?_

I did most of the preliminary figuring out of my random generator and my button on paper and with my study group. There was an extensive amount of pseudocode/whiteboarding before I began typeing things in. I used my notes from the previous week to piece things together and think about how they would work or wouldn't work. I suppose I could add pictures of my notes but I am horribly ashamed of how messy they might look, and seeing as they were just for me -there is a huge chance that if you could them, you wouldn't be able to make sense of them. 

  

## Usage
### This is meant for employees who need to generate secure passwords to be used to access sensitive data.

## Author 
Rachael Kelm-Southworth

* [linkedin] (https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3) 

* [github] (https://github.com/RKSouth/)

 ## Credits

I would like to thank Kerwin, Manuel, Roger, Jerome and all my classmates for helping me understand this subject matter and anyone that contributed to make the base code.

## License
[MIT](https://choosealicense.com/licenses/mit/)





