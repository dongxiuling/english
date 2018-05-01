<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Com_model extends CI_Model {
    public function find_this($data){
        $pdo = DB::getInstance();
        $sql = "select *,t.user_name from comment c,t_user t where t.user_id=c.user_id and c.reference=".$data; 
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function find_this2($data){
        $pdo = DB::getInstance();
        $sql = "select *,t.user_name from comment c,t_user t where t.user_id=c.user_id and c.reference=".$data; 
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function com_this($data,$user,$content){
        $pdo = DB::getInstance();
        $sql = 'insert into comment(content,reference,user_id) values('.$content.$data.$user.')'; 
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        $sql2 = "select *,t.user_name from comment c,t_user t where t.user_id=c.user_id and c.reference=".$data; 
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute();
        return $stmt2 -> fetchAll(PDO::FETCH_ASSOC);
    }
}