<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use QCloud_WeApp_SDK\Mysql\Mysql as DB;
class User_model extends CI_Model {
  public function do_select_user ($uid){
    // $pdo = DB::getInstance();
    // $sql = "select * from user"; 
    // $stmt = $pdo->prepare($sql);
    // $stmt->execute();
    // return $stmt->fetchAll(PDO::FETCH_ASSOC);
    return DB::select('t_user', ['*'],'user_id='.$uid);
  }
  public function do_select_coin(){
    $pdo = DB::getInstance();
    $sql = "select * from t_user order by coin desc limit 3"; 
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
  public function do_add_day($uid){;
    $pdo = DB::getInstance();
    $sql = "update t_user set day = day+1,coin = coin+1 where user_id =".$uid;
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    return DB::select('t_user', ['*'],'user_id='.$uid);
  }
  public function do_select_money($uid)
  {
    return DB::select('t_user', ['coin'],'user_id='.$uid);
  }
  public function do_update_coin($uid,$coin)
  {
    $pdo = DB::getInstance();
    $sql = "update t_user set coin = ".$coin." where user_id =".$uid;
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
  }
  public function do_select_message($uid)
  {
    $pdo = DB::getInstance();

    $sql1 = "select count(*) one from articles where author=".$uid;
    $stmt1 = $pdo->prepare($sql1);
    $stmt1->execute();
    $article=$stmt1->fetchAll(PDO::FETCH_ASSOC);

    $sql2 = "select count(*) two from note where user_id=".$uid;
    $stmt2 = $pdo->prepare($sql2);
    $stmt2->execute();
    $note1=$stmt2->fetchAll(PDO::FETCH_ASSOC);

    $sql3 = "select count(*) three from voice where user_id=".$uid;
    $stmt3 = $pdo->prepare($sql3);
    $stmt3->execute();
    $note2=$stmt3->fetchAll(PDO::FETCH_ASSOC);

    $sql4 = "select count(*) four from ff where uid=".$uid;
    $stmt4 = $pdo->prepare($sql4);
    $stmt4->execute();
    $follower=$stmt4->fetchAll(PDO::FETCH_ASSOC);

    $sql5 = "select count(*) five from ff where follow_id=".$uid;
    $stmt5 = $pdo->prepare($sql5);
    $stmt5->execute();
    $fans=$stmt5->fetchAll(PDO::FETCH_ASSOC);

    $user=DB::select('t_user', ['*'],'user_id='.$uid);
    
    return [$article,$note1,$note2,$follower,$fans,$user];
  }
  public function do_alter_user($uid,$sex,$school,$introduce,$date,$name,$img,$ll)
  {
     $pdo = DB::getInstance();
    $sql1 = "update t_user set user_name = ".$name.",sex=".$sex.",school=".$school.",introduce=".$introduce.",birthday=".$date.",logo_url=".$img.",location=".$ll." where user_id =".$uid;
    $stmt1 = $pdo->prepare($sql1);
    $stmt1->execute();
   return DB::select('t_user', ['*'],'user_id='.$uid);
  }
}
?>