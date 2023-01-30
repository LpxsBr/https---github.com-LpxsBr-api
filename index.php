<?php

$file = "http://localhost:8080/Nicholas";

$doc = file_get_contents($file);

echo $doc;