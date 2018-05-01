<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Article_model extends CI_Model {
    public function do_insert($title,$content,$imgUrl,$user_id){
        DB::insert('articles', [
           'title' => $title,
           'content' => $content,
           'img_url' => $imgUrl,
           'author' => $user_id
       ]);
    }
    public function do_select(){
       $pdo = DB::getInstance();
        $sql = "select * from articles,t_user where articles.author = t_user.user_id order by date desc limit 3";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function do_selectAll(){
       $pdo = DB::getInstance();
        $sql = "select * from articles,t_user where articles.author = t_user.user_id order by date desc";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    

    
}
?>