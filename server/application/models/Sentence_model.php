<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Sentence_model extends CI_Model {
   public function do_select_sentence($word){
     $pdo = DB::getInstance();
     $sql = "select * from sentence where sentence like '%".$word."%' limit 1"; 
     $stmt = $pdo->prepare($sql);
     $stmt->execute();
     return $stmt->fetchAll(PDO::FETCH_ASSOC);
   }
}
?>