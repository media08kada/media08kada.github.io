<?php

header("Content-Type: application/json");

$file = "likes.json";

$id = $_GET['id'] ?? '';
$action = $_GET['action'] ?? '';

if (empty($id)) {
echo json_encode([
"likes" => 0
]);
exit;
}

$data = [];

if (file_exists($file)) {
$json = file_get_contents($file);
$data = json_decode($json, true);

if (!is_array($data)) {
$data = [];
}
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
"likes" => $data[$id]
]);