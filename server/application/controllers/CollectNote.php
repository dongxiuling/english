<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class CollectNote extends CI_Controller {

 
  public function insert(){
  
     $note_id = $this->input->get("note_id");
     $user_id = $this->input->get("user_id");
     $flag = $this ->input ->get("flag");
     $this->load->model('CollectNote_model');
		 $res = $this->CollectNote_model->do_insert($note_id,$user_id,$flag);
		 echo json_encode($res);
    }

  public function insertVoice(){
    $voice_id = $this->input->get("voice_id");
     $user_id = $this->input->get("user_id");
     $flag = $this ->input ->get("flag");
     $this->load->model('CollectNote_model');
		 $res = $this->CollectNote_model->do_insertVoice($voice_id,$user_id,$flag);
		 echo json_encode($res);
  }

  public function selectCollect(){
    $note_id = $this ->input ->get('note_id');
    $user_id = $this ->input ->get('user_id');
  $this ->load ->model('CollectNote_model');
  $res = $this ->CollectNote_model ->do_selectCollect($note_id,$user_id);
  echo json_encode($res);
  }
  
  public function cancelCollect(){
    $note_id = $this ->input ->get('note_id');
    $user_id = $this ->input ->get('user_id');
  $this ->load ->model('CollectNote_model');
  $res = $this ->CollectNote_model ->do_cancelCollect($note_id,$user_id);
  echo json_encode($res);
  }

  public function selectVoice(){
  $voice_id = $this ->input ->get('voice_id');
    $user_id = $this ->input ->get('user_id');
  $this ->load ->model('CollectNote_model');
  $res = $this ->CollectNote_model ->do_selectVoice($voice_id,$user_id);
  echo json_encode($res);
  }

  public function cancelVoice(){
    $voice_id = $this ->input ->get('voice_id');
    $user_id = $this ->input ->get('user_id');
  $this ->load ->model('CollectNote_model');
  $res = $this ->CollectNote_model ->do_cancelVoice($voice_id,$user_id);
  echo json_encode($res);
  }
}
