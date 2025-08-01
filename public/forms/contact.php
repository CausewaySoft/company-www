<?php

// Your receiving email address
$receiving_email_address = 'office@causewaysoft.com';

// Load the email form class safely
$library_path = __DIR__ . '/php-email-form.php';
if (!file_exists($library_path)) {
  http_response_code(500);
  die(json_encode(['status' => 'error', 'message' => 'Email library missing']));
}

require_once $library_path;

// Basic validation
function sanitize_input($data) {
  return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

$name    = isset($_POST['name'])    ? sanitize_input($_POST['name'])    : '';
$email   = isset($_POST['email'])   ? sanitize_input($_POST['email'])   : '';
$subject = isset($_POST['subject']) ? sanitize_input($_POST['subject']) : 'Contact Form';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

// Check required fields
if (empty($name) || empty($email) || empty($message)) {
  http_response_code(400);
  echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
  exit;
}

// Optional: Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
  exit;
}

// Send email
$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to         = $receiving_email_address;
$contact->from_name  = $name;
$contact->from_email = $email;
$contact->subject    = $subject;

$contact->add_message($name,    'From');
$contact->add_message($email,   'Email');
$contact->add_message($message, 'Message', 10);

// Send and respond with JSON
if ($contact->send()) {
  echo json_encode(['status' => 'success', 'message' => 'Your message has been sent.']);
} else {
  http_response_code(500);
  echo json_encode(['status' => 'error', 'message' => 'Failed to send message.']);
}
?>