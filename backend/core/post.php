<?php 
class Users{
    //db stuff
    private $conn;
    private $table = 'posts';

    //post properties
    public $id;
    public $categorie_id;
    public $categorie_name;
    public $title;
    public $body;
    public $author;
    public $create_at;

    //constructor with db connection
    public function __construct($db){
        $this->conn = $db;
    }

    //getting posts from our db
    public function read(){
    }
}
?>