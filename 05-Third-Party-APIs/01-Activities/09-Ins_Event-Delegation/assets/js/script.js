var displayEl = $('#display');
var showLettersBtnEl = $('#show-letters-btn');
var buttonListEl = $('#buttons');
var clearEl = $('#clear');

// Immediately hide the clear button
clearEl.hide();

function renderLetters() {
  var letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '_',
  ];

  // Dynamically create buttons
  // Create a for-loop to iterate through the letters array.
  for (var i = 0; i < letters.length; i++) {
    // Create button
    var letterBtn = $('<button>');
    // Assign style to the button
    letterBtn.addClass('letter-button btn btn-info');
    // Assign the letter to the data-letter attribute
    letterBtn.attr('data-letter', letters[i]);
    // Display the letter
    letterBtn.text(letters[i]);
    // Attach the letter element
    buttonListEl.append(letterBtn);
  }
}

// Delegate event listener to the parent element, <div id="buttons">
/* we are going to put our click handler, not on the buttons themesleves 
but on the container that contains the buttons 
The #button has nothing in it but we're putting our listener on that empty div


buttonListEl.on('click', '.letter-button', function (event) 
 here we want to capture a click on the buttons and we wanna
 capture the letter-button, so we are adding this class, 
 then its the event, which contains the target
 so we're going to grab the attributed data-letter and now we know what was clicked 
 
 but before we do that we have to create a div 
   var displayLetterEl = $('<div>');
   this will add a letter to the display; so we are adding a class called letter
   then we are going to make the text of this particular div equal to event dot target 

   */


buttonListEl.on('click', '.letter-button', function (event) {
  var displayLetterEl = $('<div>');

  displayLetterEl.addClass('letter');
  /* here created a div and then added a class letter to the div
  */

  // get letter from clicked letter button's `data-letter` attribute and use it for display
  displayLetterEl.text($(event.target).attr('data-letter'));
  displayEl.append(displayLetterEl);
});
/* then we are going to make the text of this particular div equal to event.target 
we are using jquery and this is the get attribute and getting date-letter 
now we know what the value is of the button that was clicked

then we are going to append this div to the display element */

// Renders the letter buttons on click
showLettersBtnEl.on('click', function () {
  // render letters
  renderLetters();
  // hide show letters button
  showLettersBtnEl.hide();
  // display clear button
  clearEl.show();
});

// Clears the message board of letters on click
clearEl.on('click', function () {
  displayEl.empty();
});
