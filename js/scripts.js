//Back-end

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}


//Front-end

$(function() {
  $("form#animalSelect, select#meat-type, select#weight-unit, input#date").change(function() {
    $(this).submit();
  });

  $("form#animalSelect").submit(function(event) {
    var choice = $("#animalSelect input:checked").val();
    $("select#meatType option").hide();
    $("[class=" + choice + "]").show();
    $("#meat-order").text(capitalize(choice));

    event.preventDefault();
  });

  $("select#meat-type").submit(function(event) {
    var choice = $("#meat-type").val();
    $("div#quantity").show();
    $("#cut-order").text(capitalize(choice));

    event.preventDefault();
  });

  $("select#weight-unit").submit(function(event) {
    var choice = $("#quantity input").val() + " " + $("#weight-unit").val();
    $("div#delivery-date").show();
    $("#quantity-order").text(capitalize(choice));

    event.preventDefault();
  });

  $("input#date").submit(function(event) {
    var date = $("#date").val();
    var choice = date.slice(5,7) + "-" + date.slice(8,10) + "-" + date.slice(0,4);
    $("#date-order").text(choice);
    $("div#order").show();

    event.preventDefault();
  });
});
