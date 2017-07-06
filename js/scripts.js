$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var mealInput = $("input:radio[name=meal]:checked").val();

    $(".name").append(nameInput);
    $(".meal").append(mealInput);

    $("#confirmation").show();
    event.preventDefault();
  });
});
