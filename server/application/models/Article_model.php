<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Article_model extends CI_Model {
    public function do_insert($title,$content,$imgUrl){
        DB::insert('articles', [
           'title' => $title,
           'content' => $content,
           'img_url' => $imgUrl
       ]);
    }
    public function do_select(){
       $pdo = DB::getInstance();
        $sql = "select * from articles";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
}
?>