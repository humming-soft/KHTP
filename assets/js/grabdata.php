<?php

$conn_string = "host=localhost port=5432 dbname=MRT_CEODB user=postgres password=humming!@#123";
$conn = pg_connect($conn_string);

if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT * from pierchart");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

// while($arr = pg_fetch_row($result)){
// echo $arr[0] . " | \n";
// echo $arr[1] . " | \n";
// echo $arr[2] . " | \n";
// echo $arr[3] . " | \n";
// echo $arr[4] . " | \n";
// echo $arr[5] . " | \n";
// echo $arr[6] . " | \n";
// echo $arr[7] . " | \n";
// echo $arr[8] . " | \n";
// echo $arr[9] . " | \n";
// echo $arr[10] . " | \n";
// echo $arr[11] . " | \n";
// echo $arr[12] . " | \n";
// echo $arr[13] . " | \n";
// echo $arr[14] . " | \n";
// echo $arr[15] . " | \n";
// echo $arr[16] . " | \n";
// echo $arr[17] . " | \n";
// echo $arr[18] . " | \n";
// echo $arr[19] . " | \n";
// echo $arr[20] . " | \n";
// echo $arr[21] . " | \n";
// echo $arr[22] . " | \n";
// echo $arr[23] . " | \n";
// echo $arr[24] . " | \n";
// };

$myarray = array()
while ($arr = pg_fetch_row($result)) {
  $myarray[] = $arr;
}

echo json_encode($myarray);