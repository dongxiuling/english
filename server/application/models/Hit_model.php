<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Hit_model extends CI_Model {
    public function judge_this($data,$user){
        $pdo = DB::getInstance();
        $sql = 'select * from hit where hit.reference=:id and hit.user_id=:uid';
        $stmt = $pdo->prepare($sql);
        $stmt -> execute(array(
          ':id'=>$data,
          ':uid'=>$user
        ));
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
    }
}