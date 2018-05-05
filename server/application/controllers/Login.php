<?php
defined('BASEPATH') OR exit('No direct script access allowed');



class Login extends CI_Controller {
  public function add_user(){
    $user_name = htmlspecialchars($this->input->get('user_name'));
    $user_logo = $this->input->get('user_logo');
    $code = $this->input->get('code');
    $appid = 'wxe10d985d2b1e7019';
    $secret = 'a3c940e272b2c425cac462a56cd2a531';
    $get_token_url = 'https://api.weixin.qq.com/sns/jscode2session?appid='.$appid.'&secret='.$secret.'&js_code='.$code.'&grant_type=authorization_code';
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL,$get_token_url);
    curl_setopt($ch,CURLOPT_HEADER,0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
    $res = curl_exec($ch);
    $json_obj=json_decode($res);
    curl_close($ch);
    $openid = $json_obj->openid;
    $this->load->model('login_model');
    $res = $this->login_model->do_add_user($openid);
    if(count($res)>0){
       echo $res[0]->user_id;
    }else{
       $this->load->model('login_model');
       $res = $this->login_model->do_add_user_too($user_name,$user_logo,$openid);
       echo $res;
    }
   
  }
}



?>