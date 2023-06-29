<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "lucasribeiroctt@gmail.com";
  $from = "lucasahcorchannel@gmail.com";
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $subject = "Novo contato do site";

  $headers = "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $body = "Nome: $name<br>";
  $body .= "Email: $email<br>";
  $body .= "Mensagem: $message<br>";

  $success = mail($to, $subject, $body, $headers);

  if ($success) {
    echo "Email enviado com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar o email.";
  }
}
?>

