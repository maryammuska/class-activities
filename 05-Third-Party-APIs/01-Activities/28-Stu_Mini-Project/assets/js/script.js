// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

// Chnage the text of our time display 

var rightNow = moment().format('MMM DD, YYYY [');
timeDisplayEl.text(time);

// Date Picker 
$( function () {
    dueDateInputEl.datepicker();
});
