// pages/myInfo/myInfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    // userInfo: {
    //   avatarUrl: "",//用户头像  
    //   nickName: "",//用户昵称
    //   uid:""
    // }
    userInfo:{ 
      // logo_url: 'myinfo.png',//用户头像  
      // user_name: '登录',//用户昵称
      // user_id: '暂无ID',
      // day: 0,
      // coin: 0
    },
    prevtime:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    var that = this;
    var uid = wx.getStorageSync('uid');
    console.log(uid);
    if(uid){
      wx.request({
        url: 'https://6kxrdzrv.qcloud.la/user/select_user',
        data: {
          uid: uid
        },
        dataType: 'json',
        //responseType:'text', 
        success: function (res) {

          that.setData({
            userInfo: res.data[0]
          })



        }
      });
    }else{
      that.setData({
        userInfo:{logo_url:'../../images/myinfo.png',user_name:'请登录',user_id:'暂无ID'}
      })
    }
     
    
    //console.log(uid);
   
    // wx.getUserInfo({ 
    //   success: function (res) {
    //     //console.log(res.userInfo.avatarUrl);
    //     that.setData({
    //       'userInfo.avatarUrl': res.userInfo.avatarUrl,
    //       'userInfo.nickName': res.userInfo.nickName,
    //       'userInfo.uid':uid
    //     });
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var uid = wx.getStorageSync('uid');
    //console.log(uid);
    if (uid) {
      wx.request({
        url: 'https://6kxrdzrv.qcloud.la/user/select_user',
        data: {
          uid: uid
        },
        dataType: 'json',
        //responseType:'text', 
        success: function (res) {

          that.setData({
            userInfo: res.data[0]
          })



        }
      });
    } else {
      that.setData({
        userInfo: { logo_url: '../../images/myinfo.png', user_name: '请登录', user_id: '暂无ID' }
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  qiandao:function(){
    var uid = wx.getStorageSync('uid');
    var that = this;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
  
    var now = year + '-' + month + '-' + day;
    if (now == this.data.prevtime){
      wx.showModal({
        content: '您今天已经打过卡了，明天再来吧',
      })
    }else{
      wx.request({
        url: 'https://6kxrdzrv.qcloud.la/user/add_day',
        data:{
          uid:uid
        },
        success:function(res){
          wx.showModal({
            content: '打卡成功，学习贵在坚持',
          }),
          that.setData({
            userInfo: res.data[0]
          }),
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/user/select_coin',
            success: function (res) {

              app.globalData.rank = res.data;
            

            }
          })
          
        }
      })
    
    }
    this.setData({
      prevtime:now
    })

 
  
    
  },
  to_attention:function(){
    wx.navigateTo({
      url: '../attention/attention',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  to_fans: function () {
    wx.navigateTo({
      url: '../fans/fans',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  to_help: function () {
    wx.navigateTo({
      url: '../help/help',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  to_aboutus: function () {
    wx.navigateTo({
      url: '../aboutus/aboutus',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  to_articles: function () {
    wx.navigateTo({ 
      url: '../articles/articles?id=' + wx.getStorageSync('uid'),
      success: function (res) { },
      fail: function (res) { }, 
      complete: function (res) { wx.getStorage('uid')},
    })
  },
  to_notes: function () {
    wx.navigateTo({
      url: '../notes/notes?id=' + wx.getStorageSync('uid'),
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  to_private_message:function(){
    var that = this;
    var uid = wx.getStorageSync('uid');
    wx.navigateTo({
      url: '../private_message/private_message?id='+uid,
    })
  },
  to_money: function () {
    wx.navigateTo({
      url: '../money/money',
    })
  },
  to_login:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  }
  // login:function(){
  //   wx.redirectTo({
  //     url: '../login/login',
  //   })
  // }
})