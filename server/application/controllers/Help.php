<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Help extends CI_Controller {

	public function add_problem()
	{
		$title = $this->input->get('title');
    $content = $this->input->get('content');
    $connect = $this->input->get('connect');
    $this->load->model('help_model');
    $this->help_model->do_add_problem($title,$content,$connect);
	}
}
?>