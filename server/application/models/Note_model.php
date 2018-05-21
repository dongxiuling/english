<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Note_model extends CI_Model {
    public function do_select($words_id,$user_id){
        $pdo = DB::getInstance();
        $sql = "select aa.*,collectnote1.flag from (select note.note_id,t_user.user_name,note.content,t_user.user_id,note.date from note,t_user where note.user_id = t_user.user_id and note.words_id = '$words_id' order by date desc) aa left join collectnote1 on aa.note_id =collectnote1.note_id and collectnote1.user_id = '$user_id' order by date desc";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }

    public function do_note($content,$user_id,$words_id){
        DB::insert('note', [
           'content' => $content,
           'user_id' => $user_id,
           'words_id' =>$words_id
       ]);
       $pdo = DB::getInstance();
       $sql = "update t_user set coin = coin + 3 where user_id = '$user_id'";
       $stmt = $pdo ->prepare($sql);
       $stmt ->execute(); 
       return $words_id;

    }

    public function find_all($data){
        $pdo = DB::getInstance();
        $sql = "select * from note,t_user where t_user.user_id=note.user_id and note.user_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function find_this($data){
        $pdo = DB::getInstance();
        $sql = 'select * from note,t_user where note.user_id=t_user.user_id and note.note_id='.$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
}