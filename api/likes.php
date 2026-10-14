<?php

header("Content-Type: application/json");

$file = __DIR__ . "/likes.json";

$id = $_GET['id'] ?? '';
$action = $_GET['action'] ?? '';

if ($id === '') {
    echo json_encode([
        "success" => false,
        "likes" => 0
    ]);
    exit;
}

if (!file_exists($file)) {
    file_put_contents($file, "{}");
}

$data = json_decode(file_get_contents($file), true);

if (!is_array($data)) {
    $data = [];
}

if (!isset($data[$id])) {
    $data[$id] = 0;
}

if ($action === "like") {

    $data[$id]++;

    file_put_contents(
        $file,
        json_encode(
            $data,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
        ),
        LOCK_EX
    );
}

echo json_encode([
    "success" => true,
    "likes" => $data[$id]
]);
