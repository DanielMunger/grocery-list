
var groceries = []

var alphabet = function(groceries) {
  groceries.sort()
};
var to_upper = function(groceries) {
  var uppercase = groceries.map(function(upper) {
    return upper.toUpperCase();
  });
  return uppercase;
};

///
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2", "item3", "item4"]
    items.forEach(function(item) {
      groceries.push($("#" + item).val());
    });

    alphabet(groceries);
    uppercase = to_upper(groceries);
    alert(uppercase);


    uppercase.forEach(function(listitem) {
      $("ul").append("<li>" + listitem + "</li>")
    });
    $(".output").show();
    $("form").hide();
   });

});
