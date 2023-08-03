<?php
use Workerman\Worker;

require __DIR__ . '/../vendor/autoload.php';

$server = new Worker('websocket://0.0.0.0:2346');
$server->count = 4;
$server->onConnect = function ($connection) {
    print "New connections \n";
};

$server->onMessage = function($connection, $data) use ($server)
{
    foreach ($server->connections as $client) {
        $client->send($data);
    }
};

$server->onClose = function($connection)
{
    print "Connection closed\n";
};

Worker::runAll();
