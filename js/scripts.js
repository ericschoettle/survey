$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();

    // define variables
    var firstName = $("input#first-name").val();
    var food = $("select#favorite-foods").val();
    var music = $("input:radio[name=music]:checked").val();
    var favoriteColor = $("input#color").val();
    var date = $("input#date").val();
    var time = $("input#time").val();

    // contact
    $("ul.contact").append("<li><a class='' href=\"#" + firstName + "\"><h3>Name: " + firstName + "</h3></a></li>");

    // info
    $("div.info .jumbotron").append("<div id=\"" + firstName + "\"><h3>" + firstName + "</h3> Food: " + food + " Music: " + music + " Color: " + favoriteColor + " Date:" + date + " time " + time + "</div>");

    // show info
    $(".contact a").click(function() {
      $(this.hash).toggle();
    });

    // $("ul.contact").children("li").click(function() {
    //   $("div[class~='firstName']").show();
    // });
  });
});
