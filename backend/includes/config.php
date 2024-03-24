<?php
    $db_host = '127.0.0.1';
    $db_user = 'root';
    $db_password = 'root';
    $db_db = 'MDS_FishToWin';
    $db_port = 8889;

    $db = new PDO('mysql:host='.$db_host.';dbname='.$db_name.'; charset=utf8',$db_user, $db_password);

    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    define('APP_NAME', 'MDP_FISH_TO_WIN')

?>