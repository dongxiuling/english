<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Note extends CI_Controller {


  public function add_note(){
     $content = $this->input->get("content");
     $user_id = $this->input->get("user_id");
     $words_id = $this ->input ->get("wordsId");
     $this->load->model('Note_model');
		 $note = $this->Note_model->do_note($content,$user_id,$words_id);
		 echo json_encode($note);
  
    }

  public function select_note(){
    $this ->load ->model('Note_model');
    $res = $this -> Note_model ->do_select();
    echo json_encode($res);
  }
}
