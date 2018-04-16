console.log("success");
require.config({
    paths: {
        jquery: "jquery-1.10.1.min",
        "jquery-cookie": "jquery.cookie",
        // index : "index",
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
    var login = function(){
        alert(1);
        $("#btn_login").click(function(){
            var oname = $("#user").val();
            var opassword = $("#password").val();
            $.ajax({
                url:"../finduser.php",
                type:"POST",
                data:"name=${oname}&password=${opassword}",
                success:function(data){
                    if(data == "成功"){
                        $.cookie("login",`${oname}`);
                        window.open("index.html");
                    }else{
                        alert("密码错误");
                    }
                }
            })
        })
    }
    return{
        login:login
    }
})