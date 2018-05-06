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
    public function add_day(){
      $uid = $this->input->get('uid');
      $this->load->model('user_model');
      $res = $this->user_model->do_add_day($uid);
      echo json_encode($res);
    }
    public function alter_user()
    {
      $uid = $this->input->get('uid');
      $sex= $this->input->get('sex');
      $school= $this->input->get('school');
      $introduce=$this->input->get('introduce');
      $date=$this->input->get('dates');
      $img=$this->input->get('imgUrl');
      $ll=$this->input->get('place');
      $name=htmlspecialchars($this->input->get('name'));
      $this->load->model("user_model");
      $res=$this->user_model->do_alter_user($uid,$sex,$school,$introduce,$date,$name,$img,$ll);
      echo json_encode($res);
    }


}
?>