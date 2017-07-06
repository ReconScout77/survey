$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();

    $(".name").append(nameInput);

    $("#confirmation").show();
    event.preventDefault();
  });
});
