<?php
header('Content-Type: application/json');
$modules = [
    "map"     => glob('./acali_packages/map/*.amap.js'),
    "weather" => glob('./acali_packages/weather/*.aweather.js'),
    "events"  => glob('./acali_packages/events/*.aevents.js'),
];
echo json_encode($modules);
?>