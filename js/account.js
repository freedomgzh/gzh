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
define(["jquery","jquery-cookie"],function(){
    var account = function(){
        $.ajax({
            url:"../data/dataranklist.json",
            type:"GET",
            success:function(res){
                // alert(res);
                var html ="";
                var htmlfooter ="";
                var str = $.cookie("goods");
                var arr = eval(str);
                var sumcount = null;
                var sumprice = null;
                for(var i = 0; i < arr.length; i++){
                    var num = res[arr[i].id].price.substring(1)
                    sumcount += arr[i].num;
                    sumprice += arr[i].num * num;
                    html += `                    
                    <div class = "details_box">
                        <ul>
                            <li>
                                <div class = "cart_pro cl">
                                    <a href="javascript:;" class = "icon_btn"><i class = "iconfont icon-duihao"></i></a>
                                    <a href="" class = "img_btn"><img src="${res[arr[i].id].img}" alt=""></a>
                                    <a href="" class = "tit_btn">${res[arr[i].id].title}</a>
                                    <!-- <a href="" class = ""></a> -->
                                    <div class = "items_price">${num}</div>
                                    <div class = "items_num">${arr[i].num}</div> 
                                    <div class = "items_account">${arr[i].num * num}</div>
                                    <div class = "items_act"><a href="javascript:;" class = "delete"><i class = "iconfont icon-shanchu"></i></a></div>
                                </div>
                            </li>
                        </ul>
                    </div>`
                }
                if(arr){
                    htmlfooter =`                    
                    <div id = "check_box" class = "cl">
                        <div id = "checkleft">
                            <span class = "spanleft">
                                <a href="javascript:;"><i class = "iconfont icon-duihao"></i></a>
                                <label for="">全选(共<b>${sumcount}</b>件)</label>
                            </span>
                            |
                            <span class = "spanright">
                                <a href="javascript:;">批量删除</a>
                            </span>
                        </div>
                        <div id = "checkright">
                            <a href="" >去结算</a>
                            <div id = "accountsum">
                                合计:
                                <span id = "show">
                                    ￥
                                    <b>${sumprice}</b>
                                </span>
                            </div>
                        </div>
                    </div>`
                }
                $(".cart_details").html(html);
                $("#check").html(htmlfooter);
                $(".delete").cilck(function(){
                    
                })
            },
            error:function(obj,error){
                alert(error);
            }
        })
        $()
        // $.ajax({
        //     url:"../data/dataranklist.json",
        //     type:"GET",
        //     success:function(res){
        //         var html = "";

        //     }
        // })
    }
    return{
        account:account
    }
})