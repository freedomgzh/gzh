<?php 
    header('content-type:text/html;charset="utf-8"');


    //1、接受用户提交的学生信息 $_POST
    // print_r($_POST);
    $name = $_POST["username"];
    $password = $_POST["password"];
    // $stuChinese = $_POST["stuChinese"];
    // $stuEnglish = $_POST["stuEnglish"];
    // $stuMath = $_POST["stuMath"];

    /*
        2、链接数据库
        mysql_connect("localhost", "root", "123456");
        第一个参数  数据库所在主机名
        第二个参数  账户
        第三个参数 密码

        返回值布尔值: true false

     */
    $con = mysql_connect("localhost", "root", "123456");

    // if($con){
    //     echo "success";
    // }else{
    //     echo "error";
    //     exit;
    // }

    //3、选择数据库
    mysql_select_db("yhd");

    //4、拼接sql语句
    $sql = "INSERT INTO user VALUES('$name','$password');";

    //5、把sql语句发送给dbms，执行得到结果
    $is_ok = mysql_query($sql);

    if($is_ok){
        echo "<br/>恭喜你注册成功";
    }else{
        echo "注册失败";
    }

 ?>