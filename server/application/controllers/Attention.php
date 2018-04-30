<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Attention extends CI_Controller {

	public function select_follow()
	{
		$uid = $this->input->get('uid');
    $this->load->model('attention_model');
    $res = $this->attention_model->do_select_follow($uid);
    echo json_encode($res);
	}
  public function delete_follow(){
    $follow_id = $this->input->get('follow_id');
    $uid = $this->input->get('uid');
    $this->load->model('attention_model');
    $res = $this->attention_model->do_delete_follow($follow_id,$uid);
  }
}
?>