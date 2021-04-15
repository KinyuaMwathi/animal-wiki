$(document).ready(function() {
  $("#lion").click(function() {
    $("#hiddenLion").show();
    $("#hiddenKangaroo").hide();
    $("#hiddenCheetah").hide();
  });

  $("#kangaroo").click(function() {
    $("#hiddenKangaroo").show();
    $("#hiddenLion").hide();
    $("#hiddenCheetah").hide();
  });

  $("#cheetah").click(function() {
    $("#hiddenCheetah").show();
    $("#hiddenLion").hide();
    $("#hiddenKangaroo").hide();
  });
});