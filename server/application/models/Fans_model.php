<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Fans_model extends CI_Model {

	public function do_select_fans($uid)
	{
    $pdo = DB::getInstance();
    $sql = "select * from ff,t_user where t_user.user_id=ff.uid and ff.follow_id=".$uid; 
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
		 //$rows = DB::select('ff,t_user', ['*'], 'ff.uid = t_user.user_id and uid ='.$uid);
     //return $rows;
	}

}
?>