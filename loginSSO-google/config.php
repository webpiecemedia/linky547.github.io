<?php

//start session on web page
session_start();

//config.php

//Include Google Client Library for PHP autoload file
require_once 'vendor/autoload.php';

//Make object of Google API Client for call Google API
$google_client = new Google_Client();

//Set the OAuth 2.0 Client ID
$google_client->setClientId('832282307439-pvv9han9rqss42vrvofn07kvaafm4jjd.apps.googleusercontent.com');

//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret('_vE3V46UXxiV6a6vEVVT5_HU');

//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('https://gamesplay547.github.io/loginSSO-google/index.php');

// to get the email and profile 
$google_client->addScope('email');

$google_client->addScope('profile');

?>