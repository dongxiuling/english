<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Art_model extends CI_Model {
    public function find_all($data){
        $pdo = DB::getInstance();
        $sql = "select * from articles where articles.author=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function find_this($data){
        $pdo = DB::getInstance();
        $sql = 'select * from articles where articles.article_id='.$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
    public function zan_this($data,$user){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits+1, flag='green' where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return DB::select('articles', ['*'], 'articles.author='.$user);
;
    }
    public function cancel_this($data,$user){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits-1, flag='gray' where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return DB::select('articles', ['*'], 'articles.author='.$user);
    }
    public function zan_this2($data){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits+1, flag='green' where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return DB::select('articles', ['*'], 'articles.article_id='.$data);
;
    }
    public function cancel_this2($data){
        $pdo = DB::getInstance();
        $sql = "update articles set hits=hits-1, flag='gray' where articles.article_id=".$data;
        $stmt = $pdo->prepare($sql);
        $stmt -> execute();
        return DB::select('articles', ['*'], 'articles.article_id='.$data);
    }
}