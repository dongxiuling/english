<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Note extends CI_Controller {


  public function add_note(){
     $content = $this->input->get("content");
     $user_id = $this->input->get("user_id");
     $this->load->model('note_model');
		 $note = $this->note_model->do_note($content,$user_id);
		 echo json_encode($note);
    }
}
