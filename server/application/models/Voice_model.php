<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Voice_model extends CI_Model {
    public function do_insert($url,$uid,$wordsId){
        DB::insert('voice', [
           'url' =>$url ,
           'user_id' =>$uid ,
           'words_id' =>$wordsId
       ]);
    }
    public function do_select(){
       $pdo = DB::getInstance();
        $sql = "select * from voice,t_user,words where voice.user_id = t_user.user_id and voice.words_id = words.words_id";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function find_all($data){
          $pdo = DB::getInstance();
          $sql = "select * from voice where voice.user_id=".$data;
          $stmt = $pdo->prepare($sql);
          $stmt -> execute();
          return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
}
?>