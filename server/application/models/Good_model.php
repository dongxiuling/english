<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Good_model extends CI_Model {
  public function do_select_all (){
    return DB::select('goods', ['*'],'');
  }
  public function do_update_number($gid){
    $pdo = DB::getInstance();
    $sql ="update goods set number=number-1 where goods_id =".$gid;
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return DB::select('goods', ['*'],'');
  }
}
?>