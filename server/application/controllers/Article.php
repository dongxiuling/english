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
}
?>