<?php
 /**
 * Обработчик формы авторизации
 * Site: http://bezramok-tlt.ru
 * Авторизация пользователя
 */
 
 //Ключ защиты
 if(!defined('BEZ_KEY'))
 {
     header("HTTP/1.1 404 Not Found");
     exit(file_get_contents('../../404.html'));
 }
 
 //Если нажата кнопка то обрабатываем данные
 if(isset($_POST['submit']))
 {
	if(empty($_POST['email']))
		$err[] = 'Не введен Логин';
	
	if(empty($_POST['pass']))
		$err[] = 'Не введен Пароль';
		
	//Проверяем наличие ошибок и выводим пользователю
	if(count($err) > 0)
		echo showErrorMessage($err);
	else
	{
		/*Создаем запрос на выборку из базы 
		данных для проверки подлиности пользователя*/
		$sql = 'SELECT * 
				FROM `'. BEZ_DBPREFIX .'reg`
				WHERE `login` = "'. escape_str($_POST['email']) .'"
				AND `status` = 1';
		$res = mysqlQuery($sql);
		
		//Если логин совподает, проверяем пароль
		if(mysql_num_rows($res) > 0)
		{
			//Получаем данные из таблицы
			$row = mysql_fetch_assoc($res);

			if(md5(md5($_POST['pass']).$row['salt']) == $row['pass'])
			{	
				$_SESSION['user'] = true;
				
				//Сбрасываем параметры
				header('Location:'. BEZ_HOST .'?mode=auth');
				exit;
			}
			else
				echo showErrorMessage('Неверный пароль!');
		}
		else
			echo showErrorMessage('Логин <b>'. $_POST['email'] .'</b> не найден!');
	}
	
 }
 
?>