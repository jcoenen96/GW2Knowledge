<?php
set_time_limit(1200);
$data = file_get_contents('https://api.guildwars2.com/v2/items');
$items = json_decode($data, true);
foreach($items as $item){
	$content = file_get_contents('https://api.guildwars2.com/v2/items/'.$item);
	$anderecontent = json_decode($content, true);
	echo "<pre>";
	print_r($anderecontent);
	echo "</pre>";
}
?>