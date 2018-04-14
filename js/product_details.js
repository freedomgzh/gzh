console.log("success");
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
    var product_details = function(){
        // alert(1)
        $.ajax({
            url:"../data/datasort.json",
            type:"GET",
            success:function(res){
                // alert(res[0].name);
                var html = "";
                var html1 = "";
                var html2 = "";
                var html3 = "";
                var html4 = "";
                for(var i = 0; i < res.length; i++){
                    for(var j = 0; j < res[i].title.length; j++){
                        html1 += `<a id = "list_a">${res[i].title[j]}</a>/`
                    }
                  
                            for(var g = 0; g < res[i].list.length; g++){
                                for(var k = 0; k < res[i].list[g].length; k++){
                                    html4 += `<a>${res[i].list[g][k]}</a>`;

                                }
                                html3 = `${html4}`;
                                html4 = "";
                                html2 += `<dl id = "dlbox" class = "cl"><dt><a id = "">${res[i].name[g]}</a><i>></i></dt><dd>${html3}</dd></dl>`
                            }
                           
            
                       
                        // html3 =""      
                    html += `<li><h3><i id = "icont" class = "iconfont ${res[i].classname}"></i>${html1}</h3><div class = "div1"><div class = "div2">${html2}</div></div></li>` ;
                    html1 = "";
                    html2 ="";
                }
             
                $("#sort_ul").html(html)
            },
            error:function(obj,error){
                alert(error)
            }
        });
        $.ajax({
            url:"../data/dataranklist.json",
            type:"GET",
            success:function(res){
                var html = "";
                var id = location.search.substring(1);
                // alert(0)
                for(var i = 0; i < res.length;i++){
                    if(res[i].id == id){
                        // $("#crumbcontent span").html(res[i].title);
                        // $("#border").html(res[i].img);
                        // $("#pro_name").html(res[i].title);
                        // $("#price").html(res[i].price);
                        var htmlspan = res[i].title;
                        var htmlborder = res[i].img;
                        var htmlpro_name = res[i].title;
                        var htmlprice = res[i].price;
                    }
                }
                html = `        
                <div id = "crumb">
            <div class = "cl" id = "crumbcontent" >
                <a href="">美妆个户 ></a>
                <a href="">面部护肤 ></a>
                <a href="">眼霜 ></a>
                <a href="">蝶芙兰 ></a>
                <span>${htmlspan}</span>
            </div>
        </div>
        <div id = "showx_box" class = "cl">
            <div id = "l">
                <div id = "preview">
                    <div id = "border">
                       <img src = "${htmlborder}"> 
                    </div>
                </div>
            </div>
            <div id = "r">
                <div id = "information">
                    <div id = "pro_name">${htmlpro_name}</div>
                    <div id = "pricebox">
                        <div id = "price" class = "cl"><span>价格</span><div class = "price">${htmlprice}</div></div>
                        <ul>
                            <li>
                                <span><a href="">好评率 100%</a></span>
                                <span><a href="">[评论1.1万+条]</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id = "tag">
                    <dl class = "cl">
                        <dt>优惠劵</dt>
                        <dd>满299减30</dd>
                        <dd>满199减10</dd>
                        <dd>满99减5</dd>
                    </dl>
                </div>
                <div id = "promotion">
                    <dl class = "cl">
                        <dt>促销</dt>
                        <dd>
                            <div class = "list">
                                <div class = "fr">
                                    <span class ="sub">赠品</span>
                                    <span class = "tit">赠品随商品附送，赠完即止，请</span>
                                </div>
                            </div>
                            <div class = "list">
                                <div class = "fr">
                                    <span class ="sub">跨店铺满减</span>
                                    <span class = "tit">满199元减50元，包邮（限中国内地）</span>
                                </div>
                            </div>
                            <div class = "list">
                                <div class = "fr">
                                    <span class ="sub">限购</span>
                                    <span class = "tit">购买1-10件时享受单件价￥39，超出数量以结算价为准</span>
                                </div>
                            </div>
                            <div class = "list">
                                <div class = "fr">
                                    <span class ="sub">限制</span>
                                    <span class = "tit">此价格不与套装优惠同时享受</span>
                                </div>
                            </div>
                        </dd>

                    </dl>
                </div>
                <a href="" id = "btn_car">请加入购物车</a>
            </div>
        </div>`
            $("#main").html(html);

            },
             error:function(obj,error){
                alert(error)
        }
        });
        $("#main").on("click","#btn_car",function(){
            var id = location.search.substring(1);
            // alert(id);
            // alert(1)
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
        product_details:product_details
    }
})