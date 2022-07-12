var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();
    
   
    var item= $('input[type="text"]').val();
    console.log('item', item); 
    
    
    var li= $('<li>');
    li.text(item);
    shoppingListEl.append(li);
    
    var item= $('input[type="text"]').val('');
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleFormSubmit);