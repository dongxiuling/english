<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function index()
	{ 
    
		$this->load->view('welcome_message');
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
  public function this_article(){
		$id = $this->input->get('article_id');
		$this->load->model('art_model');
		$art = $this->art_model->find_this($id);
		echo json_encode($art);
	}
  public function this_note(){
		$id = $this->input->get('note_id');
		$this->load->model('note_model');
		$note = $this->note_model->find_this($id);
		echo json_encode($note);
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
		$this->load->model('art_model');
		$art = $this->art_model->zan_this2($id);
		echo json_encode($art);
	}
  public function cancel2(){
		$id = $this->input->get('id');
		$this->load->model('art_model');
		$art = $this->art_model->cancel_this2($id);
		echo json_encode($art);
	}
  public function zan3(){
		$id = $this->input->get('id');
    $uid = $this->input->get('uid');
		$this->load->model('note_model');
		$note = $this->note_model->zan_this($id,$uid);
		echo json_encode($note);
	}
  public function cancel3(){
		$id = $this->input->get('id');
    $uid = $this->input->get('uid');
		$this->load->model('note_model');
		$note = $this->note_model->cancel_this($id,$uid);
		echo json_encode($note);
	}
  public function zan4(){
		$id = $this->input->get('id');
		$this->load->model('note_model');
		$note = $this->note_model->zan_this2($id);
		echo json_encode($note);
	}
  public function cancel4(){
		$id = $this->input->get('id');
		$this->load->model('note_model');
		$note = $this->note_model->cancel_this2($id);
		echo json_encode($note);
	}
  public function art_com(){
    $id = $this->input->get('article_id');
    $this->load->model('com_model');
    $com = $this->com_model->find_this($id);
		echo json_encode($com);
  }
  public function note_com(){
    $id = $this->input->get('note_id');
    $this->load->model('com_model');
    $com = $this->com_model->find_this2($id);
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
}
