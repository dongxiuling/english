<?php
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Welcome extends CI_Controller {

	public function index()
	{ 
    $this->load->view('welcome_message');
	}
  public function user_info()
	{
    $uid = $this->input->get('uid');
		$this->load->model('user_model');
		$info = $this->user_model->do_select_user($uid);
		echo json_encode($info);
	}
	public function my_articles()
	{
    $id = $this->input->get('id');
		$this->load->model('art_model');
		$arts = $this->art_model->find_all($id);
		echo json_encode($arts);
	}
	public function my_notes()
	{
    $id = $this->input->get('id');
		$this->load->model('note_model');
		$notes = $this->note_model->find_all($id);
		echo json_encode($notes);
	}
  public function my_voice()
	{
    $id = $this->input->get('id');
		$this->load->model('voice_model');
		$voice = $this->voice_model->find_all($id);
		echo json_encode($voice);
	}
  public function this_article(){
		$id = $this->input->get('article_id');
    $uid = $this->input->get('uid'); 
		$this->load->model('art_model');
		$art = $this->art_model->find_this($id,$uid);
		echo json_encode($art);
	}
  public function this_user(){
		$id = $this->input->get('article_id');
		$this->load->model('art_model');
		$user = $this->art_model->find_this_user($id);
		echo json_encode($user);
	}
  public function this_note(){
		$id = $this->input->get('note_id');
		$this->load->model('note_model');
		$note = $this->note_model->find_this($id);
		echo json_encode($note);
	}
  public function judge(){
    $id = $this->input->get('id');
    $uid = $this->input->get('uid');
		$this->load->model('hit_model');
		$hit = $this->hit_model->judge_this($id,$uid);
		echo json_encode($hit); 
  }

   public function index_prais(){
    $id = $this->input->get('id');
    $uid = $this -> input->get('uid');
    $this->load->model('hit_model');
    $hit = $this->hit_model->index_judge($id,$uid);
    echo json_encode($hit);
  }

  public function zan(){
		$id = $this->input->get('id');
    $uid = $this->input->get('uid');
		$this->load->model('art_model');
		$art = $this->art_model->zan_this($id,$uid);
		echo json_encode($art);
	}
  public function cancel(){
		$id = $this->input->get('id');
    $uid = $this->input->get('uid');
		$this->load->model('art_model');
		$art = $this->art_model->cancel_this($id,$uid);
		echo json_encode($art);
	}
  public function zan2(){
		$id = $this->input->get('id');
    $uid = $this->input->get('uid');
		$this->load->model('art_model');
		$art = $this->art_model->zan_this2($id,$uid);
		echo json_encode($art);
	}
  public function cancel2(){
		$id = $this->input->get('id');
    $uid = $this->input->get('uid');
		$this->load->model('art_model');
		$art = $this->art_model->cancel_this2($id,$uid);
		echo json_encode($art);
	}
  public function art_com(){
    $id = $this->input->get('article_id');
    $this->load->model('com_model');
    $com = $this->com_model->find_this($id);
		echo json_encode($com); 
  }
  public function ping(){
    $id = $this->input->get('article_id');
    $uid = $this->input->get('uid');
    $cont = $this->input->get('cont');
    $this->load->model('com_model');
    $com = $this->com_model->com_this($id,$uid,$cont);
		echo json_encode($com);
  }
  public function judge2(){
    $cid = $this->input->get('cid');
    $uid = $this->input->get('uid');
		$this->load->model('hit2_model');
		$hit = $this->hit2_model->judge_this($cid,$uid);
		echo json_encode($hit); 
  }
  public function zan3(){
    $id = $this->input->get('id');
		$cid = $this->input->get('cid');
    $uid = $this->input->get('uid');
		$this->load->model('com_model');
		$com = $this->com_model->zan_this($id,$cid,$uid);
		echo json_encode($com);
	}
  public function cancel3(){
    $id = $this->input->get('id');
		$cid = $this->input->get('cid');
    $uid = $this->input->get('uid');
		$this->load->model('com_model');
		$com = $this->com_model->cancel_this($id,$cid,$uid);
		echo json_encode($com);
	}
  public function my_collages(){
    $uid = $this->input->get('uid');
		$this->load->model('collectNote_model');
		$res = $this->collectNote_model->select_words_collect($uid);
		echo json_encode($res);
	}
  public function my_collages2(){
    $uid = $this->input->get('uid');
		$this->load->model('collectNote_model');
		$res = $this->collectNote_model->select_voices_collect($uid);
		echo json_encode($res);
	}
}
