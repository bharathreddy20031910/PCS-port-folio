<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name ?? '';
$email = $data->email ?? '';
$phone = $data->phone ?? '';
$message = $data->message ?? '';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'mail.pcsgpl.com';         // ✅ Replace with your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@pcsgpl.com';           // ✅ Your SMTP email
    $mail->Password   = 'IkswNtd$mK{0';            // ✅ Your SMTP password
    $mail->SMTPSecure = 'ssl';                      // Or 'tsl'
    $mail->Port       = 465;                        // Or 465 for SSL

    // Recipients
    $mail->setFrom('contact@pcsgpl.com', 'PCS Global Contact');
    $mail->addAddress('contact@pcsgpl.com');      // ✅ Recipient address

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "
        <h2>New Message from PCS Global Website</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->send();
    echo json_encode(["success" => true, "message" => "Message sent!"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
