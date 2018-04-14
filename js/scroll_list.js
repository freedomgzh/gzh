define(["jquery"],function($){
    var scroll_list = function(){
        var count = 0;
        $("#right_move").click(function(){
            count++;
            $("#seckill_ul").animate({
                "left":-1023 * count
            },1000)
            $("#left_move").attr("class","appear");

            if(count == 2){
                $("#right_move").attr("class","disappear");
            }
        // alert(1)
        })
        // var countl = 0;
        $("#left_move").click(function(){
            count--;
            $("#seckill_ul").animate({
                "left": -2046 + 1023 * count
            },1000)
            $("#right_move").attr("class","appear")
            if(count == 0){
                $("#left_move").attr("class","disappear");
            }
        })
    }

    return{
        scroll_list:scroll_list
    }
})