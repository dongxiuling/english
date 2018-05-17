<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Voice extends CI_Controller {
  public function insertVoice(){
    $url = $this ->input ->get('Voice_url');
    $uid = $this ->input ->get('user_id');
    $wordsId = $this ->input ->get('wordsId');
    $this ->load ->model('Voice_model');
    $res = $this ->Voice_model ->do_insert($url,$uid,$wordsId);
    echo json_encode($res);
  }
    
    public function upVoiceFile(){           
            $path = "./upVoice/";
            if (isset($_GET)) {
                $name = $_FILES['file']['name'];
                $name_tmp = $_FILES['file']['tmp_name'];
                $type = strtolower(substr(strrchr($name, '.'), 1));
                $voice_name = time() . rand(10000, 99999) . "." . $type;
                $voice_url =  $path . $voice_name;
                if (move_uploaded_file($name_tmp, $voice_url)) {//临时文件转移到目标文件夹
                    echo $voice_url;
                } else {
                    echo 'fail';
                }
            }
           
    }

    public function select_voice(){
       $words_id = $this ->input ->get('words_id');
      $this ->load ->model('Voice_model');
      $res = $this ->Voice_model ->do_select($words_id);
      echo json_encode($res);
    }

    
    }

?>