//Back-end



//Front-end

$(function() {
  $("form#animalSelect, select#meat-type, select#weight-unit").change(function() {
    $(this).submit();
  });

  $("form#animalSelect").submit(function(event) {
    var choice = $("#animalSelect input:checked").val();
    $("select#meatType option").hide();
    $("[class=" + choice + "]").show();

    event.preventDefault();
  });

  $("select#meat-type").submit(function(event) {
    $("div#quantity").show();

    event.preventDefault();
  });

  $("select#weight-unit").submit(function(event) {
    $("div#delivery-date").show();

    event.preventDefault();
  });
});
