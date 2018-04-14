define(["jquery"],function($){
    var scroll = function(){
        var count = 1;
        var timer = null;
        var index = 1;
        function timerstart(){
            timer = setInterval(function(){
                $("#scroll_pic").animate({
                    opacity:0.5,         
                },500,function(){
                    $(".banner_li").eq(count).css("zIndex",1).siblings("li").css("zIndex",0);
                    // $("#scroll_pic").css("opacity",1)
                    $(".showPage li").eq(count).attr("class","active").siblings("li").attr("class","none");            
                    count++;
                    if(count == 7){
                        count =0;
                    }
                }).animate({
                    opacity: 1
                }, 200)    
            },2000);
        }
           
        $(".showPage li").mouseover(function(){
            $(this).attr("class","active").siblings("li").attr("class","none");
            count = $(this).index();
            $(".banner_li").eq(count).css("zIndex",1).siblings("li").css("zIndex",0);
            count++
            clearInterval(timer);  
        })
        $("#scroll_pic").hover(function(){
            clearInterval(timer);
        },function(){
            timerstart();
        })
    }
    return{
        scroll:scroll
    }
})