define(["jquery","jquery-cookie"],function($){
    var car = function(){
        $("#car").on("click", function(){
            // alert(this.id);
            //是否是第一次添加cookie
            var id = location.search.substring(1);
            alert(id)
            var first = $.cookie("goods") == null ? true : false;
            if(first){
                //第一次添加  [{id:id,num:2}]
                $.cookie("goods", '[{id:' + id + ',num:1}]', {
                    expires: 7
                });
            }else{
                var str = $.cookie("goods");
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
            sc_car();

            alert($.cookie("goods"));


            return false;
        })

        /*
            mouseenter  移入
            mouseleave  移出
        */
        $(".sc_right").mouseenter(function(){
            $(this).stop().animate({
                right: 0
            })
            sc_msg();
        });
        $(".sc_right").mouseleave(function(){
            $(this).stop().animate({
                right: -270
            })
        });

        //购物车数字
        function sc_car(){
            var sc_str = $.cookie("goods");
            if(sc_str){ //判断字符串是否存在
                var sc_arr = eval(sc_str);
                var sc_num = 0;
                for(var i in sc_arr){
                    sc_num = Number(sc_arr[i].num) + sc_num;
                }
                $(".sc_num").html(sc_num);
            }
        }

        //已经存储在cookie数据进行加载
        function sc_msg(){
            $.ajax({
                url: "data.json",
                type: "get",
                success: function(res){
                    var sc_arr = eval($.cookie("goods"));
                    var html = '';
                    for(var i in sc_arr){
                        html += '<li><div class="sc_goodsPic"><img src="'+res[sc_arr[i].id].img+'" alt=""></div><div class="sc_goodsTitle"><p>这是商品曲奇饼干</p></div><div class="sc_goodsBtn" id="'+sc_arr[i].id+'">购买</div><div class="sc_goodsNum">商品数量:'+sc_arr[i].num+'</div></li>';
                    }
                    $(".sc_right ul").html(html);
                }
            })
        }

    })
    }
    return{
        car:car
    }
})