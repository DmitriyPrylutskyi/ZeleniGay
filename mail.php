<? 
$adminemail="anastasiiaalieksieieva@ecs-3.com";
$date=date("d.m.y");
$time=date("H:i");
$backurl="/index.html#modal2";
 
$name=$_POST['visitor_name']; 
$email=$_POST['visitor_email']; 
$msg=$_POST['visitor_message']; 

$msg=" 
Имя: $name 
E-mail: $email 
Сообщение: $msg 
";

mail("$adminemail", "$date $time Сообщение от $name", "$msg");

header('Location:'.$backurl);

exit;

?>