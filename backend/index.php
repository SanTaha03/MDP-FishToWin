<?php
// Inclusion du fichier de configuration de la base de données
require_once 'dbconfig.php';

// Requête pour sélectionner tous les utilisateurs
$query = "SELECT * FROM User";

// Préparation de la requête SQL pour éviter les injections SQL
if ($stmt = $mysqli->prepare($query)) {
  // Exécution de la requête
  $stmt->execute();

  // Récupération des résultats
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    // Initialisation du tableau pour stocker les utilisateurs
    $users = array();

    // Parcourir les résultats et stocker les utilisateurs dans le tableau
    while ($row = $result->fetch_assoc()) {
      $users[] = $row;
    }

    // Afficher les utilisateurs au format JSON
    echo json_encode($users);
  } else {
    // Si aucun utilisateur n'est trouvé, renvoyer un message JSON vide
    echo json_encode(array());
  }

  // Fermer la requête
  $stmt->close();
} else {
  // En cas d'erreur de préparation de la requête SQL, renvoyer une erreur JSON
  echo json_encode(array('error' => 'Erreur de préparation de la requête SQL'));
}

// Fermer la connexion à la base de données
$mysqli->close();
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <h1>Fish To Win !</h1>
</body>
</html>