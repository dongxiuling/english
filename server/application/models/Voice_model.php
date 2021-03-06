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
       $pdo = DB::getInstance();
       $sql = "update t_user set coin = coin + 3 where user_id = '$uid'";
       $stmt = $pdo ->prepare($sql);
       $stmt ->execute(); 
    }
    public function do_select($words_id,$user_id){
       $pdo = DB::getInstance();
        $sql = "select  distinct aa.*,collectvoice.flag from (select voice.voice_id,t_user.user_name,voice.url,t_user.user_id,voice.date from voice,t_user where voice.user_id = t_user.user_id and voice.words_id = '$words_id' order by date desc) aa left join collectvoice on aa.voice_id =collectvoice.voice_id and collectvoice.user_id = '$user_id' order by date desc";
       // select * from voice,t_user,words where voice.user_id = t_user.user_id and voice.words_id = words.words_id order by date desc
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function find_all($data){
          $pdo = DB::getInstance();
          $sql = "select * from voice,words,t_user where voice.words_id=words.words_id and voice.user_id=t_user.user_id and voice.user_id=".$data;
          $stmt = $pdo->prepare($sql);
          $stmt -> execute();
          return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
} 
?>