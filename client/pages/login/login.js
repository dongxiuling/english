// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      avatarUrl: "",//用户头像  
      nickName: "",//用户昵称  
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var uid = wx.getStorageSync('uid');
    console.log(uid);
    if(uid){
      console.log(uid);
    }else{
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              success: function (res) {
                //console.log(res.userInfo.avatarUrl);
                that.setData({
                  userInfo: {
                    avatarUrl: res.userInfo.avatarUrl,//用户头像  
                    nickName: res.userInfo.nickName//用户昵称  
                  }
                  // 'userInfo.avatarUrl': res.userInfo.avatarUrl,
                  // 'userInfo.nickName': res.userInfo.nickName,
                });
                wx.request({
                  url: 'https://6kxrdzrv.qcloud.la/login/add_user',
                  data: {
                    user_name: that.data.userInfo.nickName,
                    user_logo: that.data.userInfo.avatarUrl
                  },
                  success: function (res) {
                    //console.log(res.data);
                    wx.setStorageSync('uid', res.data);
                    wx.switchTab({
                      url: '../index/index',
                      success: function(res) {},
                      fail: function(res) {},
                      complete: function(res) {},
                    })
                  }
                })
              }
            });


          } else {
            wx.switchTab({
              url: '../index/index',
              success: function (res) { },
              fail: function (res) { },
              complete: function (res) { },
            })
          }
        }
      })
    }
 
}
})