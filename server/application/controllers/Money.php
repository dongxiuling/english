<?php
defined('BASEPATH') OR exit('No direct script access allowed');
  class Money extends CI_Controller{
    public function select_money()
    {
      $uid=$this->input->get('user_id');
      $this->load->model('user_model');
      $res = $this->user_model->do_select_money($uid);
      echo json_encode($res); 
    }
    public function select_goods()
    {
      $this->load->model("good_model");
      $res=$this->good_model->do_select_all();
      echo json_encode($res);
    }
    public function update_goods()
    {
       $coin=$this->input->get('coin');
       $uid=$this->input->get('user_id');
       $this->load->model("user_model");
       $rest=$this->user_model->do_update_coin($uid,$coin);
      $this->load->model("good_model");
      $gid=$this->input->get('goods_id');
      $res=$this->good_model->do_update_number($gid);
      echo json-encode($res);
    }
  }
?>