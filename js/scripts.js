$(document).ready(function() {
  $("#lion").click(function() {
    $("#hiddenLion").toggle();
    $("#hiddenKangaroo").hide();
    $("#hiddenCheetah").hide();
  });

  $("#kangaroo").click(function() {
    $("#hiddenKangaroo").toggle();
    $("#hiddenLion").hide();
    $("#hiddenCheetah").hide();
  });

  $("#cheetah").click(function() {
    $("#hiddenCheetah").toggle();
    $("#hiddenLion").hide();
    $("#hiddenKangaroo").hide();
  });
});