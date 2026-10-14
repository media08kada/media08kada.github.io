<?php
header("Content-Type: application/json");

// Like PHP
$file = "likes.json";

$id = $_GET['id'] ?? '';
$action = $_GET['action'] ?? '';

if (!$id) {
    echo json_encode(["likes" => 0]);
    exit;
}

// Baca data
$data = file_exists($file)
    ? json_decode(file_get_contents($file), true)
    : [];

if (!is_array($data)) {
    $data = [];
}

// Jika belum ada artikel
if (!isset($data[$id])) {
    $data[$id] = 0;
}

// Tambah like
if ($action === "like") {
    $data[$id]++;

    file_put_contents(
        $file,
        json_encode($data, JSON_PRETTY_PRINT)
    );
}

// Kirim jumlah like
echo json_encode([
    "likes" => $data[$id]
]);
?>