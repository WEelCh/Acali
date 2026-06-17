<?php
header('Content-Type: application/json');
$modules = [
    "map"     => glob('./modules/map/*.amap.js'),
    "weather" => glob('./modules/weather/*.aweather.js'),
    "events"  => glob('./modules/events/*.aevents.js'),
];
echo json_encode($modules);
?>