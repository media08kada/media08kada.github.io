<?php

header("Content-Type: application/json");

$file = __DIR__ . "/likes.json";

$id = $_GET['id'] ?? '';
$action = $_GET['action'] ?? '';

if (!$id) {
    echo json_encode(["likes" => 0]);
    exit;
}

$data = file_exists($file)
    ? json_decode(file_get_contents($file), true)
    : [];

if (!isset($data[$id])) {
    $data[$id] = 0;
}

if ($action === "like") {
    $data[$id]++;

    file_put_contents(
        $file,
        json_encode($data, JSON_PRETTY_PRINT),
        LOCK_EX
    );
}

echo json_encode([
    "likes" => $data[$id]
]);