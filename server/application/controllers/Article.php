<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Article extends CI_Controller {
    public function insert_article(){
      $title = $this ->input ->get('title');
      $content = $this ->input ->get('content');
      $img_url = $this ->input ->get('filePath');
      $user_id = $this ->input ->get('userId');
      $this ->load ->model('Article_model');
      $res = $this ->Article_model ->do_insert($title,$content,$img_url,$user_id);
      echo json_encode($res);
    }

    public function select_article(){
      $uid = $this->input->get('uid');
      $this ->load ->model('Article_model');
      $res = $this ->Article_model ->do_select($uid);
      echo json_encode($res);
    }

    public function select_allArticle(){
      $uid = $this->input->get('uid');
      $this ->load ->model('Article_model');
      $res = $this ->Article_model ->do_selectALL($uid);
      echo json_encode($res);
    }
    
    public function upFile(){           
            $path = "./upload/";
            if (isset($_POST)) {
                $name = $_FILES['file']['name'];
                $name_tmp = $_FILES['file']['tmp_name'];
                $type = strtolower(substr(strrchr($name, '.'), 1));
                $pic_name = time() . rand(10000, 99999) . "." . $type;
                $pic_url =  $path . $pic_name;
                if (move_uploaded_file($name_tmp, $pic_url)) {//临时文件转移到目标文件夹
                    echo $pic_url;
                } else {
                    echo 'fail';
                }
            }           
    }



    public function Admire(){
      $id = $this ->input ->get('id');
      $uid = $this ->input ->get('uid');
      $this ->load ->model('Article_midel');
      $res = $this ->Article_model ->do_admire($id,$uid);
      echo json_encode($res);
    }
    }

?>