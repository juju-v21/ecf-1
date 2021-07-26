<?php
// header('Content-type:application/json;charset=utf-8');
// echo (json_encode (["response" => "hello World"]));

// if(!empty($email) && !empty($message)){
//     if(filter_var($email, FILTER_VALIDATE_EMAIL)){

$to = 'kikicacazizi7@gmail.com';
$from = $_POST['email']; 
$name = $_POST['name']; 
$sujet = $_POST['sujet']; 
$message = $_POST['message']; 
$sender = "from: $from, $name";
$mess = "message: $message";

mail($to, $sujet, $mess, $sender);



?>