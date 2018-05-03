<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Com_model extends CI_Model {
    public function find_this($data){
        $pdo = DB::getInstance();
        $sql = "select *,t.user_name from comment c,t_user t where t.user_id=c.user_id and c.reference=:id order by date desc"; 
        $stmt = $pdo->prepare($sql);
        $stmt -> execute(array(
            ':id' => $data
        ));
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function com_this($data,$user,$content){
        $pdo = DB::getInstance();
        $sql = "INSERT INTO comment(content,reference,user_id) VALUES (:cont,:ref,:id)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(
          array(
            ':cont' => $content,
            ':ref' => $data,
            ':id' => $user
        ));
        $sql2 = "select *,t.user_name from comment c,t_user t where t.user_id=c.user_id and c.reference=:id order by date desc"; 
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
            ':id' => $data
        ));
        return $stmt2 -> fetchAll(PDO::FETCH_ASSOC);
    }
}