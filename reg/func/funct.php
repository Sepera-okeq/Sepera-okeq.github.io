 <?php
 /**
 * Файл с пользовательскими функциями
 * Site: http://bezramok-tlt.ru
 * Регистрация пользователя письмом
 */
 
  //Ключ защиты
 if(!defined('BEZ_KEY'))
 {
     header("HTTP/1.1 404 Not Found");
     exit(file_get_contents('../404.html'));
 }
 
 /**Функция экранирования вносимых данных
 *@param array $data
 */
 function escape_str($data)
 {
    if(is_array($data))
    {
        if(get_magic_quotes_gpc())
           $strip_data = array_map("stripslashes", $data);
           $result = array_map("mysql_real_escape_string", $strip_data);
           return  $result;
    }
    else
    {
        if(get_magic_quotes_gpc())
           $data = stripslashes($data);
           $result = mysql_real_escape_string($data);
           return $result;
    }
 }
 
 /**Отпровляем сообщение на почту
 * @param string  $to
 * @param string  $from
 * @param string  $title
 * @param string  $message
 */
 function sendMessageMail($to, $from, $title, $message)
 {
   //Адресат с отправителем
   //$to = $to;
   //$from = $from;
   
   //Формируем заголовок письма
   $subject = $title;
   $subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
   
   //Формируем заголовки для почтового сервера
   $headers = "Content-type: text/html; charset=\"utf-8\"\r\n";
   $headers .= "From: ". $from ."\r\n";
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";

   //Отправляем данные на ящик админа сайта
   if(!mail($to, $subject, $message, $headers))
      return 'Ошибка отправки письма!';  
   else  
      return true;  
 }
 
  /**функция вывода ошибок
  * @param array  $data
  */
 function showErrorMessage($data)
 {
    $err = '<ul>'."\n";	
	
	if(is_array($data))
	{
		foreach($data as $val)
			$err .= '<li style="color:red;">'. $val .'</li>'."\n";
	}
	else
		$err .= '<li style="color:red;">'. $data .'</li>'."\n";
    
	$err .= '</ul>'."\n";
    
    return $err;
 }
 
  /**Простая обертка для запросов к MySQL
  * @param string  $sql
  */
 function mysqlQuery($sql)
 {
	$res = mysql_query($sql);
	/* Проверяем результат
	Это показывает реальный запрос, посланный к MySQL, а также ошибку. Удобно при отладке.*/
	if(!$res)
	{
		$message  = 'Неверный запрос: ' . mysql_error() . "\n";
		$message .= 'Запрос целиком: ' . $sql;
		die($message);
	}
	
	return $res;
 }
 
 /**Простой генератор соли
 * @param string  $sql
 */
 function salt()
 {
	$salt = substr(md5(uniqid()), -8);
	return $salt;
 }
