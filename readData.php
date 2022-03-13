<?php
    header('Content-Type: application/json');

    // dang nhap vao database
    include("config.php");

    // Doc gia tri RGB tu database
    $sql = "select * from envData where id>(select max(id) from envData)-6";
    $result = mysqli_query($conn,$sql);

    $data = array();
    foreach ($result as $row){
        $data[] = $row;
    }

    // add random data
    /*
    $temp = rand(20, 50);
    $humid = rand(10, 60);

    $sql = "insert into envData(temperature, humidity) values ($temp,$humid)";
    mysqli_query($conn,$sql);
    */

    mysqli_close($conn);
    echo json_encode($data);

?>