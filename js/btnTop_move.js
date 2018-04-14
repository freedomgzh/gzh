define(["jquery"],function($){
    var btnTop_move = function(){
    $("#btnTop").mousedown(function(){
        $("#chipsBox").css("display","none")
    })
    $("#chipsBox").mouseover(function(){
        $("#chips1A").stop().animate({
            top: 330
        },1000)
        $("#chipsBox").stop().animate({
            height:250
        },1000)
    })
    $("#chipsBox").mouseout(function(){
        $("#chips1A").stop().animate({
            top: 0
        },1000)
        $("#chipsBox").stop().animate({
            height: 80
        },1000)
    })
    }
    return{
        btnTop_move:btnTop_move
    }
})