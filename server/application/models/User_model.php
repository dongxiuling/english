<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class User_model extends CI_Model {
  public function do_select_user ($uid){
    // $pdo = DB::getInstance();
    // $sql = "select * from user"; 
    // $stmt = $pdo->prepare($sql);
    // $stmt->execute();
    // return $stmt->fetchAll(PDO::FETCH_ASSOC);
    return DB::select('t_user', ['*'],'user_id='.$uid);
  }
  public function do_select_coin(){
    $pdo = DB::getInstance();
    $sql = "select * from t_user order by coin desc limit 3"; 
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
  public function do_add_day($uid){;
    $pdo = DB::getInstance();
    $sql = "update t_user set day = day+1,coin = coin+1 where user_id =".$uid;
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return DB::select('t_user', ['*'],'user_id='.$uid);
  }
}
?>