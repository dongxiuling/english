<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
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
}
