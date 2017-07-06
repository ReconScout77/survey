$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var mealInput = $("input:radio[name=meal]:checked").val();
    var bornInput = $("#born").val();
    var colorInput = $("#color").val();

    $(".name").text(nameInput);
    $(".meal").text(mealInput);
    $(".born").text(bornInput);
    $(".color").text(colorInput);

    $("#confirmation").show();
    event.preventDefault();
  });
});
