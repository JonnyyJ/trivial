<?php
//SwiftMailer laravel内置邮件类库 
//使用composer，SwiftMailer将会被自动安装。github地址：https://github.com/swiftmailer/swiftmailer
//以163邮箱为例，去设置一个登陆163邮箱的授权码。具体设置请看: http://jingyan.baidu.com/article/1876c8526895ce890b1376b1.html

//发邮件

$_POST['UCID']
$a
function email(){
    require_once 'lib/swift_required.php';

 // Create the Transport
 $transport = Swift_SmtpTransport::newInstance('smtp.example.org', 25)
      ->setUsername('your username')
      ->setPassword('your password');


$mailer = Swift_Mailer::newInstance($transport);

// Create a message
$message = Swift_Message::newInstance('Wonderful Subject')
  ->setFrom(array('你的邮箱地址' => '名字'))
  ->setTo($_POST['UCID'].'@njit.edu')
  ->setBody('验证码:'.$a);

// Send the message
$result = $mailer->send($message); 
}
>