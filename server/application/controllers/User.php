<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class User extends CI_Controller {
    public function select_user(){
      $this->load->model('user_model');
      $res = $this->user_model->do_select_user();
      echo json_encode($res); 
    }
}
?>