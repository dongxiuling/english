<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class User_model extends CI_Model {
  public function do_select_user (){
    // $pdo = DB::getInstance();
    // $sql = "select * from user"; 
    // $stmt = $pdo->prepare($sql);
    // $stmt->execute();
    // return $stmt->fetchAll(PDO::FETCH_ASSOC);
    return DB::select('t_user', ['*']);
  }
  
}
?>