<?php 
    header('content-type:text/html;charset="utf-8"');
    $con = mysql_connect("localhost", "root", "123456");
    $name = $_POST["name"];
    $password = $_POST["password"];


    // if($con){
    //     echo "success";
    // }else{
    //     echo "error";
    //     exit;
    // }

    //3、选择数据库
    mysql_select_db("yhd");

    $sql = "SELECT name,password FROM user WHERE name='$name' and password='$password';";

    $res = mysql_query($sql);
    // var_dump($res);
    if($res){
        echo "成功";
    }else{
        echo "失败";
    }
    // echo '<table border="1px" width="400px">';
    // echo "<tr><th>学生编号</th><th>学生姓名</th><th>数学成绩</th><th>英语成绩</th><th>语文成绩</th></tr>";
    // while($row = mysql_fetch_assoc($res)){
    //     echo "<tr><td>{$row['id']}</td><td>{$row['name']}</td><td>{$row['math']}</td><td>{$row['english']}</td><td>{$row['chinese']}</td></tr>";
    // }
    // echo "</table>";
 ?>