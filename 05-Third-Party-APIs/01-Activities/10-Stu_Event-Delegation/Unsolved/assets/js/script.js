var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

var itemCount = 0;


function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }
  itemCount++;

  var shoppingListItemEl = $(
    '<li id="item_' + itemCount + '" class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  // add string cancatenation data-item="'+ shoppingItem + '"
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn" data-item="'+ itemCount + '">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
shoppingListEl.on('click', '.delete-item-btn', function(event) {
  var itemNum = $(event.target).attr('data-item'); 
  $("#item_"+itemNum).remove();
  
})

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above

shoppingFormEl.on('submit', handleFormSubmit);
