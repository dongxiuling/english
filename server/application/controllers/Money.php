<?php
defined('BASEPATH') OR exit('No direct script access allowed');
  class Money extends CI_Controller{
    public function slec()
    {
      $user_id=$this->input->get('user_id');
      $sql='select money from user where user_id='+$user_id;
      $query=db->query($sql);
      echo '2';
    }
  }
?>