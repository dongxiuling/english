<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Words_model extends CI_Model {
    public function do_insert($name){
      //   DB::insert('words', [
      //      'name' =>$name
      //  ]);
      $pdo = DB::getInstance();
      $sql = "INSERT INTO words(name) VALUES (:name)";

    //调用prepare方法准备查询
    $stmt = $pdo->prepare($sql);

    //传递一个数组为预处理查询中的命名参数绑定值，并执行SQL
    $stmt->execute(array(':name' => $name));

    //获取最后一个插入数据的ID值
    return $pdo->lastInsertId();

    }
   
   public function do_select($words_name){
      $pdo = DB::getInstance();
        $sql = "select  words_id from words where words.name = '$words_name'";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
         return $stmt -> fetchAll(PDO::FETCH_ASSOC);
        
   }

    
}
?>