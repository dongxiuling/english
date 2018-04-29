<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Attention_model extends CI_Model {

	public function do_select_follow($uid)
	{
    $pdo = DB::getInstance();
    $sql = "select * from ff,t_user where t_user.user_id=ff.follow_id and ff.uid=".$uid; 
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
		 //$rows = DB::select('ff,t_user', ['*'], 'ff.uid = t_user.user_id and uid ='.$uid);
     //return $rows;
	}
  public function do_delete_follow($follow_id,$uid){
    $pdo = DB::getInstance();
    $sql = "delete from ff where follow_id=".$follow_id." and uid=".$uid; 
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    // DB::delete('ff', 'follow_id = '.$follow_id.' and uid');
  }

}
?>