<?php
require 'vendor/autoload.php';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $generator = new Picqer\Barcode\BarcodeGeneratorHTML();
    echo $generator->getBarcode($name, $generator::TYPE_CODE_128);
    file_put_contents('barcode.jpg', $generator->getBarcode($name,$generator::TYPE_CODE_128,3,50));
}
?>

<form method="post">
    <input type="text" name="name" required>
    <input type="submit" name="submit">
</form>