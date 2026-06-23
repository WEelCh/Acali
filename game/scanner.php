<?php
header('Content-Type: application/json');
$modules = [
    "weather" => glob('./modules/weather/*.Aweather.js'),
    "events"  => glob('./modules/*.Amod.js'),
];
echo json_encode($modules);
?>