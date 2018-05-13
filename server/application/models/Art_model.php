<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;
 
class Art_model extends CI_Model {
    public function find_all($data){
        $pdo = DB::getInstance();
        $sql = "select articles.*,hit.* from articles left JOIN hit on hit.reference=articles.article_id and hit.user_id=articles.author where articles.author=:data order by articles.article_id desc";
        $stmt = $pdo->prepare($sql);
        $stmt -> execute(array(
          ':data'=>$data
        ));
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function find_this($data){
        $pdo = DB::getInstance();
        $sql = 'select articles.*,hit.* from articles left JOIN hit on hit.reference=articles.article_id and  hit.user_id=articles.author where articles.article_id='.$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function zan_this($data,$user){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits+1 where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        $sql2 = "insert into hit(reference,user_id,	flag) values(:ref,:id,:flag)";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user,
          ':flag'=>'green'
        ));
        $sql3 = 'select articles.*,hit.* from articles left JOIN hit on hit.reference=articles.article_id and hit.user_id=articles.author where articles.author=:id order by articles.article_id desc';
        $stmt3 = $pdo->prepare($sql3);
        $stmt3 -> execute(array(
          ':id'=>$user
        ));
        return $stmt3 -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function cancel_this($data,$user){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits-1 where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        $sql2 = "delete from hit where reference=:ref and user_id=:id";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user
        ));
        $sql3 = 'select articles.*,hit.* from articles left JOIN hit on hit.reference=articles.article_id and hit.user_id=articles.author where articles.author=:id order by articles.article_id desc';
        $stmt3 = $pdo->prepare($sql3);
        $stmt3 -> execute(array(
          ':id'=>$user
        ));
        return $stmt3 -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function zan_this2($data,$user){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits+1 where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        $sql2 = "insert into hit(reference,user_id,	flag) values(:ref,:id,:flag)";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user,
          ':flag'=>'green'
        ));
        $sql3 = 'select articles.*,hit.* from articles left JOIN hit on hit.reference=articles.article_id and articles.author=hit.user_id where articles.article_id=:ref and articles.author=:id';
        $stmt3 = $pdo->prepare($sql3);
        $stmt3 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user
        ));
        return $stmt3 -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function cancel_this2($data,$user){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits-1 where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        $sql2 = "delete from hit where reference=:ref and user_id=:id";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user
        ));
        $sql3 = 'select articles.*,hit.* from articles left JOIN hit on hit.reference=articles.article_id and articles.author=hit.user_id where articles.article_id=:ref and articles.author=:id';
        $stmt3 = $pdo->prepare($sql3);
        $stmt3 -> execute(array(
          ':ref'=>$data,
          ':id'=>$user
        ));
        return $stmt3 -> fetchAll(PDO::FETCH_ASSOC);
    }
}