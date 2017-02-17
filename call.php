<? 
$adminemail="anastasiiaalieksieieva@ecs-3.com";
$date=date("d.m.y");
$time=date("H:i");
$backurl="/index.html#modal1";
 
$phone=$_POST['visitor_phone']; 

$msg="Номер телефона: $phone"; 

mail("$adminemail", "$date $time Перезвонить", "$msg");

header('Location:'.$backurl);

exit;
?>