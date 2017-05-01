$(document).ready(function(){

  var favoriteFlavors = ["vanilla", "chocolate", "strawberry"];

  $("button").click(function() {
    favoriteFlavors.forEach(function(flavor) {
      $("#favorite").append(favoriteFlavors);
    });
     });
    // $("#favorite").append(favoriteFlavors[0]);
 });
