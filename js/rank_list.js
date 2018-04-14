console.log("success")
require.config({
    paths: {
        jquery: "jquery-1.10.1.min",
        "jquery-cookie": "jquery.cookie",
        index : "index",
        "btnTop_move": "btnTop_move",
        "parabola": "parabola"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
        /*
            js文件，声明不遵从AMD规范的js文件
        */
        "parabola": {
            exports: "_"
        }
    }
})
define(["jquery","jquery-cookie"],function($){
    var rank_list = function(){
        // alert(1)
        $.ajax({
            url:"../data/dataranklist.json",
            type:"GET",
            success:function(res){
                // alert(res);
                var html = "";
                var count = 0;
                for(var i = 0; i < res.length; i++){
                    if( i >= 10){
                        res[i].id = "";
                    }
                    count = i + 1;
                    if(i == 0){
                        html = `<div class = "list${res[i].id} list_box"><i>${res[i].id}</i><a href = "product_details.html?${res[i].id}"><img src = ${res[i].img}></a><div class = "left_box"><p>${res[i].title}</p><div id = "price_box"><div class = "price"><span><em>${res[i].discount}</em>折</span></div><div class = "average_box"><div class = "average_price">参考价： ${res[i].average_price}</div></div><div class = "car_btn">加入购物车</div></div></div></div>`
                    }else {
                        html += `<div class = "list${count} list_box"><i>${res[i].id}</i><a href = "product_details.html?${res[i].id}"><img src = ${res[i].img}></a><p>${res[i].title}</p><div id = "price_box"><div class = "price"><span><em>${res[i].discount}</em>折</span></div><div class = "average_box"><div class = "average_price">参考价： ${res[i].average_price}</div></div></div><div class = "car_btn">加入购物车</div></div>`

                    }
                }
                $("#rank_show").html(html);
            },
            error:function(obj,error){
                alert(error);
            }
        });
        $("#rank_show").on("click",".car_btn",function(){
            // var id = location.search.substring(1);
            // alert(id);
            // alert(1)
            // var id = this.id;
            // alert(id);
            var id = $(this).parent().attr("class").substring(4,5);
            // alert($(this).parent().attr("class").substring(4,5))
            var first = $.cookie("goods") == null ? true : false;
            if(first){
                //第一次添加  [{id:id,num:2}]
                $.cookie("goods", '[{id:' + id + ',num:1}]', {
                    expires: 7
                });
            }else{
                var str = $.cookie("goods");
                // alert(str)
                var arr = eval(str);
                var same = false; //代表是否有相同商品

                //遍历所有的对象，判断是否id相同，num++
                for(var i in arr){
                    if(arr[i].id == id){
                        arr[i].num = arr[i].num + 1;
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("goods", cookieStr,  {
                            expires: 7
                        });
                        same = true;
                        break;
                    }
                }

                //没有相同的商品
                if(!same){
                    var obj = {id: id, num: 1};
                    arr.push(obj);
                    var cookieStr = JSON.stringify(arr);
                    $.cookie("goods", cookieStr, {
                        expires: 7
                    });
                }   
            }
            $("#slide").animate({
                "right": 0
            },1000)
            // alert(1)
            sc_car();
            return false;
        })
                //购物车数字
        function sc_car(){
            var sc_str = $.cookie("goods");
            if(sc_str){ //判断字符串是否存在
                var sc_arr = eval(sc_str);
                var sc_num = 0;
                for(var i in sc_arr){
                    sc_num = Number(sc_arr[i].num) + sc_num;
                }
                $("#car_num").css("display","block");
                $("#car_num").html(sc_num);
            }
        }
    }
    return{
        "rank_list":rank_list
    }
})

