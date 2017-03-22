$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    // Full Name
    var fullName = $("input#full-name").val();
    console.log(fullName);

    //Favorite Food
    var food = $("select#favorite-foods").val();
    console.log(food);

    //Favorite Music
    var music = $("input:radio[name=music]:checked").val();
    console.log(music);
    
    //Color
    var favoriteColor = $("input#color").val();
    console.log(favoriteColor);

    //Date
    var date = $("input#date").val();
    console.log(date);
  });
});
