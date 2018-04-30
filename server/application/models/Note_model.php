<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Note_model extends CI_Model {
    public function find_all(){
        $pdo = DB::getInstance();
        $sql = "select * from note";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }

    public function do_note($content,$user_id){
        DB::insert('note', [
           'content' => $content,
           'user_id' => $user_id
       ]);
    }
}