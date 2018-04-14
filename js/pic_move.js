define(["jquery"],function($){
    var pic_move = function(){
        $(".move").mouseover(function(){
            $(this).stop().animate({
                "left":-5
            },600)
        }).mouseout(function(){
            $(this).stop().animate({
                "left":0
            },600)
        })
    }
    return{
        pic_move:pic_move
    }
})