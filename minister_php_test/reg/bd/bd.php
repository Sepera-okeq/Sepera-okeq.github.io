<?php
 /**
 * Подключение к базе данных
 * Site: http://bezramok-tlt.ru
 * Регистрация пользователя письмом
 */

 //Ключ защиты
 if(!defined('BEZ_KEY'))
 {
     header("HTTP/1.1 404 Not Found");
     exit(file_get_contents('./../404.html'));
 }

 //Соединение с БД MySQL
 $db_connect = mysql_connect( BEZ_DBSERVER, BEZ_DBUSER, BEZ_DBPASSWORD ) or die(BEZ_ERROR_CONNECT);

 define('BEZ_CONNECT', $db_connect);

 mysql_select_db( BEZ_DATABASE, BEZ_CONNECT )or die(BEZ_NO_DB_SELECT);

 //Устанавливаем кодировку UTF8
 mysql_query ("SET NAMES utf8");
 mysql_query ("set character_set_client='utf8'");
 mysql_query ("set character_set_results='utf8'");
 mysql_query ("set collation_connection='utf8_general_ci'");
