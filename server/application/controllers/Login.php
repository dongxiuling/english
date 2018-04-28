<?php
defined('BASEPATH') OR exit('No direct script access allowed');



class Login extends CI_Controller {
  public function add_user(){
    $user_name = $this->input->get('user_name');
    $user_logo = $this->input->get('user_logo');
    $this->load->model('login_model');
    $uid = $this->login_model->do_add_user($user_name,$user_logo);
    echo $uid;
  }
}



?>