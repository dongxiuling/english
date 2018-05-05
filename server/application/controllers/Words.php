<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Words extends CI_Controller {
  public function insertWords(){
    $name = $this ->input ->get('words');
    $this ->load ->model('Words_model');
    $res = $this ->Words_model ->do_insert($name);
    echo json_encode($res);    
  }   

  public function selectWords(){
    $words_name = $this ->input ->get('name');
    $this ->load ->model('Words_model');
    $res = $this ->Words_model ->do_select($words_name);
    echo json_encode($res);

  }
    }

?>