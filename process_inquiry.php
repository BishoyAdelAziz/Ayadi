<?php
header('Content-Type: application/json');

// Validate input
$errors = [];
$data = [];

if (empty($_POST['ProductName'])) {
    $errors['ProductName'] = 'Product name is required';
}

if (empty($_POST['Email']) || !filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)) {
    $errors['Email'] = 'Valid email is required';
}

if (empty($_POST['Inquiry'])) {
    $errors['Inquiry'] = 'Inquiry is required';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['message'] = 'Please fix the errors in the form';
    $data['errors'] = $errors;
} else {
    // Process the form data
    $productName = htmlspecialchars($_POST['ProductName']);
    $email = htmlspecialchars($_POST['Email']);
    $inquiry = htmlspecialchars($_POST['Inquiry']);
    
    // Email details
    $to = "info@evkayadi.com";
    $subject = "New Product Inquiry: " . $productName;
    
    // Email message
    $message = "
    <html>
    <head>
        <title>New Product Inquiry</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .header { color: #1a97c8; font-size: 18px; font-weight: bold; }
            .label { color: #b62348; font-weight: bold; }
        </style>
    </head>
    <body>
        <p class='header'>You have received a new product inquiry:</p>
        <p><span class='label'>Product Name:</span> $productName</p>
        <p><span class='label'>From:</span> $email</p>
        <p><span class='label'>Inquiry:</span></p>
        <p>$inquiry</p>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Send email
    $mailSent = mail($to, $subject, $message, $headers);
    
    if ($mailSent) {
        $data['success'] = true;
        $data['message'] = 'Thank you for your inquiry! We will contact you soon.';
    } else {
        $data['success'] = false;
        $data['message'] = 'There was a problem sending your inquiry. Please try again later.';
        error_log("Failed to send email to: $to");
    }
}

echo json_encode($data);
?>