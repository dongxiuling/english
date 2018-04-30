 <?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Fans extends CI_Controller {

	public function select_fans()
	{
		$uid = $this->input->get('uid');
    $this->load->model('fans_model');
    $res = $this->fans_model->do_select_fans($uid);
    echo json_encode($res);
	}
}
?>