console.log("success")
require.config({
    paths:{
        jquery:"jquery-1.10.1.min"
    }
})



define(["jquery"],function($){
    var register = function(){
        // alert(0)
        $("#username").focus(function(){
            $("#username_label").animate({
                left:-62
            },400)
            $("#username + .rule").css("display","block");
            $("#username_hint").css("display","none");
            $("#username + .rule").animate({
                "top":-6
            },500);
            $("#username_rule").css("display","block");
            $("#username_rule").html("4-20位字符，可由中文、英文、数字或符号'_'组成");
            $("#username_rule").css("backgroundColor","#e4e4e4");

        })
        $("#username").blur(function(){
            var oValue = $("#username").val().replace(/ /ig,"");
            // alert(oValue)
            $("#username").html(oValue);
            if(!oValue){
                $("#username_rule").css("display","none");
                $("#username + .rule").animate({
                    "top":6
                },500);
                $("#username_hint").css("display","block");
                $("#input_box li").eq(0).css("border","1px solid red")

            }else if(oValue.length < 4 || oValue.lenght > 20){
                $("#username_rule").html("请输入正确的用户名，用户名应为4-20位字符");
                $("#username_rule").css("backgroundColor","#fff4d7");
                // alert(oValue.length)
            }else if(!((/^\w/).test(oValue))){
                $("#username_rule").html("用户名格式错误，请输入正确的用户名");
                $("#username_rule").css("backgroundColor","#fff4d7");
            }else{
                $("#username + .rule").animate({
                    opacity:0
                },200,function(){
                    $("#username + .rule").css("display","none");
                    $("#username_success").css("display","block");

                })
            }
        })
        $("#phone").focus(function(){
            $("#phone_label").animate({
                left:-52
            },400)
            $("#phone + .rule").css("display","block");

        });
        $("#phone").blur(function(){
            var oValue = $("#phone").val().replace(/ /ig,"");
            $("#phone").val(oValue);
            if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(oValue)){
                $("#phone + .rule").animate({
                    opacity:0
                },200,function(){
                    $("#phone + .rule").css("display","none");
                    $("#phone_success").css("display","block");

                })
            }else{
                $("#phone_rule").html("格式错误，请输入正确的手机号码");
                $("#phone_rule").css("backgroundColor","#fff4d7");
                $("#input_box li").eq(1).css("border","1px solid red");

            }
        })
        $("#message").focus(function(){
            $("#message_label").animate({
                left:-95
            },400)

        })
        $("#password").focus(function(){
            $("#password_label").animate({
                left:-60
            },400)
            $("#password + .rule").css("display","block");
            $("#password_hint").css("display","none");
            $("#password + .rule").animate({
                "top":-6
            },500);
            $("#password_rule").css("display","block");
            $("#password_rule").html("6-20个大小写字母、英文、数字或符号组成");
            $("#password_rule").css("backgroundColor","#e4e4e4");
        })
        $("#password").blur(function(){
            var oValue = $("#password").val()
            if(!oValue){
                $("#password_rule").css("display","none");
                $("#password + .rule").animate({
                    "top":6
                },400,function(){
                    $("#input_box #password_hint").css("display","block");
                    $("#input_box li").eq(3).css("border","1px solid red");
                })

            }else if(oValue.length < 6 || oValue.length > 20){
                $("#password_rule").html("密码应为6-20位字符");
                $("#password_rule").css("backgroundColor","#fff4d7");
                $("#password + .rule").css("top",4);
            }else if(!((/^\w/).test(oValue))){
                $("#password_rule").html("密码格式错误，大小写字母、英文、数字或符号组成");
                $("#password_rule").css("backgroundColor","#fff4d7");
            }else {
                $("#password + .rule").animate({
                    opacity:0
                },200,function(){
                    $("#password + .rule").css("display","none");
                    $("#password_success").css("display","block");

                });
            }
        })
        $("#twice_password").focus(function(){
            $("#twice_password_label").animate({
                "left":-115
            },400)
            $("#twice_password + .rule").css("display","block");
        });
        $("#twice_password").blur(function(){
            var oValue = $("#twice_password").val(); 
            if(!(oValue == $("#password").val())){
                $("#twice_password_rule").html("两次密码不一致");
                $("#twice_password_rule").css("backgroundColor","#fff4d7");
                $("#input_box li").eq(4).css("border","1px solid red");


            }else if(!oValue){
                $("#twice_password_rule").html("请再次输入密码");
                $("#twice_password_rule").css("backgroundColor","#fff4d7");
                $("#input_box li").eq(4).css("border","1px solid red");

            }else{
                $("#twice_password_rule").css("display","none");
                $("#twice_password_success").css("display","block");


            }
        })
        $("#input_box").on("click","#agreement",function(){
            // alert(0)
            var oname = $("#username").val();
            var opassword = $("#password").val();
            alert(oname);
            $.ajax({
                url:"../insertuser.php",
                type:"POST",
                data:"name=${oname}&password=${opassword}",
                success:function(data){
                    alert(data);
                },
                error:function(obj,error){
                    alert(error);
                }
            })
        })


    }
    return{
        register:register
    }
})