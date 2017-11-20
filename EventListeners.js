var inputFields = jQuery('input');
var firstInput = inputFields[0];
monitorEvents(firstInput);


//
$('#my-input').on('keypress', function(){
	console.log('The event happened')
});

//alter the color of the page 
$('#my-input').on('keypress', function()
{
	$('body').css('background-color', '#2727FF');
});



// fill in the blanks in the correct order
/*
$([B]).[C]([D], [A])
A. A function with the stuff we want to do
B. the target element being listened to
C. on 
D. the type of event being listened for
*/

/*my button element for a click event*/
/*remove element from dom and add class success to body*/

/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/

$('#my-button').on('click',function(){
    $('button').remove();
    $('body').addClass('success')
});

/*
$('article').on('click', function(evt){
	console.log(evt);
});
*/

// other event listeners
/*
event.keyCode - tells what key was pressed
event.pageX and event.pageY - know where on the page the click occurred
- helpful for analytics tracking
event.type - find what event happened - useful for listening to a target for 
multiple events
*/

/*
convenience method -> on not required
$('input').keypress(function(){
	
});
*/

// jQuery's .hover(...) method is not a shortcut for .on('hover', ...)

// understanding event delegation 

