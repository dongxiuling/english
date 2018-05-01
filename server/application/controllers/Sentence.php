<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Sentence extends CI_Controller {
   public function select_sentence(){
     $word = $this->input->get('word');
     $this->load->model('sentence_model');
     $res = $this->sentence_model->do_select_sentence($word);
     echo json_encode($res); 
   }
}
?>