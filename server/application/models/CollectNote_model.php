<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class collectNote_model extends CI_Model {
    

    public function do_insert($note_id,$user_id,$flag){
        DB::insert('collectnote1', [
           'note_id' => $note_id,
           'user_id' => $user_id,
           'flag' =>$flag
       ]);
       return '一行受影响';
    }
    public function do_insertVoice($voice_id,$user_id,$flag){
        DB::insert('collectvoice', [
           'voice_id' => $voice_id,
           'user_id' => $user_id,
           'flag' =>$flag
       ]);
    }

    public function do_selectCollect($note_id,$user_id){
         $pdo = DB::getInstance();
        $sql = "select * from collectnote1 where note_id = '$note_id' and user_id = '$user_id'";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }

    public function do_cancelCollect($note_id,$user_id){
      $pdo = DB::getInstance();
        $sql = "delete from collectnote1 where note_id ='$note_id' and user_id = '$user_id'";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }

    public function do_selectVoice($voice_id,$user_id){
   $pdo = DB::getInstance();
        $sql = "select * from collectvoice where voice_id = '$voice_id' and user_id = '$user_id'";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
   public function do_cancelVoice($voice_id,$user_id){
      $pdo = DB::getInstance();
        $sql = "delete from collectvoice where voice_id ='$voice_id' and user_id = '$user_id'";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
  
}