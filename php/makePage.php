<?php
$content = $_GET["content"];
$name = $_GET["name"];

$file = $name . ".html";
file_put_contents($file, $content);
echo $file;
 echo "<script language=\"text/javascript\">window.open('/projectfoler/php/"+$name+".html');</script>";
?>