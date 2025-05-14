<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["feedbackName"])) {
    // Sanitize inputs
    $name = isset($_POST['feedbackName']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['feedbackName']) : "";
    $senderEmail = isset($_POST['feedbackEmail']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['feedbackEmail']) : "";
    $senderTel = isset($_POST['feedbackTel']) ? preg_replace("/[^\d\+\-\s]/", "", $_POST['feedbackTel']) : "";
    $subjectInput = isset($_POST['contactsSubject']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['contactsSubject']) : "";
    $messageContent = isset($_POST['feedbackMessage']) ? preg_replace("/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['feedbackMessage']) : "";

    // Email settings
    $to = "info@evkayadi.com";
    $subject = "Contact Us";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "From: $senderEmail\r\n";

    // Email body
    $message = "
        <strong>Name:</strong> $name<br>
        <strong>Subject:</strong> $subjectInput<br>
        <strong>Email:</strong> $senderEmail<br>
        <strong>Phone:</strong> $senderTel<br>
        <strong>Message:</strong><br>$messageContent
    ";

    // Send mail
    $send_email = mail($to, $subject, $message, $headers);

    // Response
    if ($send_email) {
        echo '<div class="success-message">✅ Thank you! Your Feedback has been sent.</div>';
    } else {
        echo '<div class="error-message">❌ Error: Your message could not be sent.</div>';
    }
} else {
    echo '<div class="error-message">⚠️ Form not submitted properly.</div>';
}
?>
