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
    public function do_select($words_id){
       $pdo = DB::getInstance();
        $sql = "select aa.*,collectvoice.flag from (select voice.voice_id,t_user.user_name,voice.url,t_user.user_id,voice.date from voice,t_user where voice.user_id = t_user.user_id and voice.words_id = '$words_id' order by date desc) aa left join collectvoice on aa.voice_id =collectvoice.voice_id";
       // select * from voice,t_user,words where voice.user_id = t_user.user_id and voice.words_id = words.words_id order by date desc
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