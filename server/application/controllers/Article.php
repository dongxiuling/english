<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class Article extends CI_Controller {
    public function insert_article(){
      $title = $this ->input ->get('title');
      $content = $this ->input ->get('content');
      $img_url = $this ->input ->get('imgUrl');
      $this ->load ->model('Article_model');
      $res = $this ->Article_model ->do_insert($title,$content,$img_url);
      echo json_encode($res);
    }

    public function select_article(){
      $this ->load ->model('Article_model');
      $res = $this ->Article_model ->do_select();
      echo json_encode($res);
    }

    public function upFile(){
            //允许上传文件格式
            $path = "./upload/";
            if (isset($_GET)) {
                $name = $_FILES['file']['name'];
                $name_tmp = $_FILES['file']['tmp_name'];
                $pic_url =  $path . $name;
                if (move_uploaded_file($name_tmp, $pic_url)) {//临时文件转移到目标文件夹
                    echo $pic_url;
                } else {
                    echo 'fail';
                }
            }
    }

}
?>