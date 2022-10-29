$(document).ready(function(){
    $("body").css("margin","3%");
    $("button").click(function(){
        if($("#fname").val().length==0){
            alert("please fill out first name field");
        }
        else if($("#lname").val().length==0){
            alert("please fill out last name field");
        }
       
    });


})