function showsomethings(){
    $("#somethings_container").css("display","inherit");
    $("#somethings_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#somethings_container").removeClass("animated slideInLeft");
    },800);
}
function closesomethings(){
    $("#somethings_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#somethings_container").removeClass("animated slideOutLeft");
        $("#somethings_container").css("display","none");
    },800);
}
function showlists(){
    $("#lists_container").css("display","inherit");
    $("#lists_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#lists_container").removeClass("animated slideInRight");
    },800);
}
function closelists(){
    $("#lists_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#lists_container").removeClass("animated slideOutRight");
        $("#lists_container").css("display","none");
    },800);
}
function showworks(){
    $("#works_container").css("display","inherit");
    $("#works_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#works_container").removeClass("animated slideInUp");
    },800);
}
function closeworks(){
    $("#works_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#works_container").removeClass("animated slideOutDown");
        $("#works_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#somgthings").removeClass("animated fadeIn");
      $("#works").removeClass("animated fadeIn");
      $("#lists").removeClass("animated fadeIn");
    },1000);
},1500);
