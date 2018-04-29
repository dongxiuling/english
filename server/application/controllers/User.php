<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class User extends CI_Controller {
    public function select_user(){
      $uid = $this->input->get('uid');
      $this->load->model('user_model');
      $res = $this->user_model->do_select_user($uid);
      echo json_encode($res); 
    }
    public function select_coin(){

      $this->load->model('user_model');
      $res = $this->user_model->do_select_coin();
      echo json_encode($res);
    }
}
?>