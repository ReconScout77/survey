$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var mealInput = $("input:radio[name=meal]:checked").val();
    var bornInput = $("#born").val();

    $(".name").append(nameInput);
    $(".meal").append(mealInput);
    $(".born").append(bornInput);

    $("#confirmation").show();
    event.preventDefault();
  });
});
