<?php
 /**
 * Обработчик формы регистрации
 * Site: http://bezramok-tlt.ru
 * Регистрация пользователя письмом
 */
 
 //Ключ защиты
 if(!defined('BEZ_KEY'))
 {
     header("HTTP/1.1 404 Not Found");
     exit(file_get_contents('../../404.html'));
 }
 
 //Выводим сообщение об удачной регистрации
 if(isset($_GET['status']) and $_GET['status'] == 'ok')
	echo '<b>Вы успешно зарегистрировались! Пожалуйста активируйте свой аккаунт!</b>';
 
 //Выводим сообщение об удачной регистрации
 if(isset($_GET['active']) and $_GET['active'] == 'ok')
	echo '<b>Ваш аккаунт на http://bezramok-tlt.ru успешно активирован!</b>';
	
 //Производим активацию аккаунта
 if(isset($_GET['key']))
 {
	//Проверяем ключ
	$sql = 'SELECT * 
			FROM `'. BEZ_DBPREFIX .'reg`
			WHERE `active_hex` = "'. escape_str($_GET['key']) .'"';
	$res = mysqlQuery($sql);
			
	if(mysql_num_rows($res) == 0)
		$err[] = 'Ключ активации не верен!';
	
	//Проверяем наличие ошибок и выводим пользователю
	if(count($err) > 0)
		echo showErrorMessage($err);
	else
	{
		//Получаем адрес пользователя
		$row = mysql_fetch_assoc($res);
		$email = $row['login'];
	
		//Активируем аккаунт пользователя
		$sql = 'UPDATE `'. BEZ_DBPREFIX .'reg`
				SET `status` = 1
				WHERE `login` = "'. $email .'"';
		$res = mysqlQuery($sql);
		
		//Отправляем письмо для активации
		$title = 'Ваш аккаунт на http://bezramok-tlt.ru успешно активирован';
		$message = 'Поздравляю Вас, Ваш аккаунт на http://bezramok-tlt.ru успешно активирован';
			
		sendMessageMail($email, BEZ_MAIL_AUTOR, $title, $message);
			
		/*Перенаправляем пользователя на 
		нужную нам страницу*/
		header('Location:'. BEZ_HOST .'?mode=reg&active=ok');
		exit;
	}
 }
 /*Если нажата кнопка на регистрацию,
 начинаем проверку*/
 if(isset($_POST['submit']))
 {
	//Утюжим пришедшие данные
	if(empty($_POST['email']))
		$err[] = 'Поле Email не может быть пустым!';
	else
	{
		if(!preg_match("/^[a-z0-9_.-]+@([a-z0-9]+\.)+[a-z]{2,6}$/i", $_POST['email']))
           $err[] = 'Не правильно введен E-mail'."\n";
	}
	
	if(empty($_POST['pass']))
		$err[] = 'Поле Пароль не может быть пустым';
	
	if(empty($_POST['pass2']))
		$err[] = 'Поле Подтверждения пароля не может быть пустым';
	
	//Проверяем наличие ошибок и выводим пользователю
	if(count($err) > 0)
		echo showErrorMessage($err);
	else
	{
		/*Продолжаем проверять введеные данные
		Проверяем на совподение пароли*/
		if($_POST['pass'] != $_POST['pass2'])
			$err[] = 'Пароли не совподают';
			
		//Проверяем наличие ошибок и выводим пользователю
	    if(count($err) > 0)
			echo showErrorMessage($err);
		else
		{
			/*Проверяем существует ли у нас 
			такой пользователь в БД*/
			$sql = 'SELECT `login` 
					FROM `'. BEZ_DBPREFIX .'reg`
					WHERE `login` = "'. escape_str($_POST['email']) .'"';
			$res = mysqlQuery($sql);
			
			if(mysql_num_rows($res) > 0)
				$err[] = 'К сожалению Логин: <b>'. $_POST['email'] .'</b> занят!';
			
			//Проверяем наличие ошибок и выводим пользователю
			if(count($err) > 0)
				echo showErrorMessage($err);
			else
			{
				//Получаем ХЕШ соли
				$salt = salt();
				
				//Солим пароль
				$pass = md5(md5($_POST['pass']).$salt);
				
				/*Если все хорошо, пишем данные в базу*/
				$sql = 'INSERT INTO `'. BEZ_DBPREFIX .'reg`
						VALUES(
								"",
								"'. escape_str($_POST['email']) .'",
								"'. $pass .'",
								"'. $salt .'",
								"'. md5($salt) .'",
								0
								)';
				$res = mysqlQuery($sql);
				
				//Отправляем письмо для активации
				$url = BEZ_HOST .'?mode=reg&key='. md5($salt);
				$title = 'Регистрация на http://bezramok-tlt.ru';
				$message = 'Для активации Вашего акаунта пройдите по ссылке 
				<a href="'. $url .'">'. $url .'</a>';
				
				sendMessageMail($_POST['email'], BEZ_MAIL_AUTOR, $title, $message);
				
				//Сбрасываем параметры
				header('Location:'. BEZ_HOST .'?mode=reg&status=ok');
				exit;
			}
		}
	}
 }
 
?>