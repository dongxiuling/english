<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Note_model extends CI_Model {
    public function do_select(){
        $pdo = DB::getInstance();
        $sql = "select * from note,t_user where note.user_id = t_user.user_id";
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