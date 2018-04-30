<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Help_model extends CI_Model {

	public function do_add_problem($title,$content,$connect)
	{
        DB::insert('help', [
          'title' => $title,
          'content' => $content,
          'connect' => $connect
        ]);
	}
}
?>