<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Com_model extends CI_Model {
    public function find_this($data){
        $pdo = DB::getInstance();
        $sql = "select *,t.user_name from comment c,t_user t where t.user_id=c.user_id and c.reference=:id order by comment_id desc"; 
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
        $sql2 = "select *,t.user_name from comment c,t_user t where t.user_id=c.user_id and c.reference=:id order by comment_id desc"; 
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
            ':id' => $data
        ));
        return $stmt2 -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function zan_this($bel,$data,$user){
        $pdo = DB::getInstance();
        $sql = "update comment set hits=hits+1 where comment.comment_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        $sql2 = "insert into hit2 (reference,user_id,flag) values(:ref,:id,:flag)";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user,
          ':flag'=>'green'
        ));
        $sql3 = 'select comment.*,hit2.*,t_user.user_name from t_user,comment left JOIN hit2 on hit2.reference=comment.comment_id where comment.user_id=t_user.user_id and comment.reference=:id order by comment.comment_id desc';
        $stmt3 = $pdo->prepare($sql3);
        $stmt3 -> execute(array(
          ':id'=>$bel
        ));
        return $stmt3 -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function cancel_this($bel,$data,$user){
        $pdo = DB::getInstance();
        $sql = "update comment set hits=hits-1 where comment.comment_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        $sql2 = "delete from hit2 where reference=:ref and user_id=:id";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user
        ));
        $sql3 = 'select comment.*,hit2.*,t_user.user_name from t_user,comment left JOIN hit2 on hit2.reference=comment.comment_id where comment.user_id=t_user.user_id and comment.reference=:id order by comment.comment_id desc';
        $stmt3 = $pdo->prepare($sql3);
        $stmt3 -> execute(array(
          ':id'=>$bel
        ));
        return $stmt3 -> fetchAll(PDO::FETCH_ASSOC);
    }
}