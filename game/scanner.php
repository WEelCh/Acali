<?php
header('Content-Type: application/json');
$modules = [
    "weather" => glob('./modules/weather/*.aweather.js'),
    "events"  => glob('./modules/*.aevents.js'),
];
echo json_encode($modules);
?>