//Zmiana koloru:

//I sposób
var span = $("span");
span.each(function(index, element){
    if (index % 2 != 0) {
        $(element).css("color", "blue");
    }
});

//II sposób
$("span:even").css("color", "red");

//Dodanie przycisku
var paragraph = $("p");
paragraph.each(function(index, element){
    var button = "<button class='btn' data-tmp='" + index + "'>Click me</button>";
    $(element).append(button);
});

//Dodawanie alertu
$("button").click(function(){
    alert($(this).attr("data-tmp"));
});