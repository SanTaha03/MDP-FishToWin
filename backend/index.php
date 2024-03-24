<?php
// // Inclusion du fichier de configuration de la base de données
// require_once 'dbconfig.php';

// // Requête pour sélectionner tous les utilisateurs
// $query = "SELECT * FROM User";

// // Préparation de la requête SQL pour éviter les injections SQL
// if ($stmt = $mysqli->prepare($query)) {
//   // Exécution de la requête
//   $stmt->execute();

//   // Récupération des résultats
//   $result = $stmt->get_result();

//   if ($result->num_rows > 0) {
//     // Initialisation du tableau pour stocker les utilisateurs
//     $users = array();

//     // Parcourir les résultats et stocker les utilisateurs dans le tableau
//     while ($row = $result->fetch_assoc()) {
//       $users[] = $row;
//     }

//     // Afficher les utilisateurs au format JSON
//     echo json_encode($users);
//   } else {
//     // Si aucun utilisateur n'est trouvé, renvoyer un message JSON vide
//     echo json_encode(array());
//   }

//   // Fermer la requête
//   $stmt->close();
// } else {
//   // En cas d'erreur de préparation de la requête SQL, renvoyer une erreur JSON
//   echo json_encode(array('error' => 'Erreur de préparation de la requête SQL'));
// }

// // Fermer la connexion à la base de données
// $mysqli->close();

header('Content-Type: application/json'); 

if (isset($_SERVER['HTTP_ORIGIN'])) {
  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Max-Age: 86400'); 
  header('Content-Type: application/json');  // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
      header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
      header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}
echo json_encode([
  'prenom' => 'Dimitri',
  'nom' => 'Beziau'
])
?>