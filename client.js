// client-side js
// run by the browser each time your view template is loaded

$(function() {
  console.log('hello world :o');
  
  $.get('/groceryList', function(groceryList) {
    groceryList.forEach(function(groceryList) {
      $('<li></li>').text(groceryList).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    dream = $('input').val();
    $.post('/groceryList?' + $.param({groceryList: groceryList}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});
