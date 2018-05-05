<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;
 
class Login_model extends CI_Model {
  public function do_add_user($openid){
  
    $rows = DB::select('t_user', ['*'], 'loginflag ="'.$openid.'"');
    //$rows = DB::select('tableName', ['*'], 'nickname = "Jason"');
    return $rows;
  


     
}
public function do_add_user_too($user_name,$user_logo,$openid){
 $pdo = DB::getInstance();
      $sql = "INSERT INTO t_user(user_name,logo_url,loginflag) VALUES (:name,:logo,:flag)";

    //调用prepare方法准备查询
    $stmt = $pdo->prepare($sql);

    //传递一个数组为预处理查询中的命名参数绑定值，并执行SQL
    $stmt->execute(array(':name' => $user_name,':logo'=>$user_logo,':flag'=>$openid ));

    //获取最后一个插入数据的ID值
    return $pdo->lastInsertId();

}
}
?>