<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Note_model extends CI_Model {
    public function find_all($data){
        $pdo = DB::getInstance();
        $sql = "select * from note where note.user_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function find_this($data){
        $pdo = DB::getInstance();
        $sql = 'select * from note where note.note_id='.$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
}