// pages/login/login.js
Page({ 

  /** 
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
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
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.switchTab({
            url: '../index/index',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
          //已经授权，可以直接调用 getUserInfo 获取头像昵称
        }
      }
    })
    //  wx.login({
    //       success: function (res) {
    //         if(res.code){
    //           var code = res.code; 
    //           wx.getSetting({
    //           success: function (res) {
    //           if (res.authSetting['scope.userInfo']) {
    //           //已经授权，可以直接调用 getUserInfo 获取头像昵称
    //             wx.getUserInfo({
    //               success: function (res) {
    //                 //console.log(res.userInfo.avatarUrl);
    //                 that.setData({
    //                   userInfo: {
    //                     avatarUrl: res.userInfo.avatarUrl,//用户头像  
    //                     nickName: res.userInfo.nickName//用户昵称  
    //                   }
    //                 }),
    //                   wx.request({
    //                     url: 'https://6kxrdzrv.qcloud.la/login/add_user',
    //                     data: {
    //                       code: code,
    //                       user_name: that.data.userInfo.nickName,
    //                       user_logo: that.data.userInfo.avatarUrl
    //                     },
    //                     success: function (res) {
    //                       wx.setStorageSync('uid', res.data);
    //                     }
    //                   })
    //               }

    //             })
    //           }
    //           }
    //           })
    //         }
             
    //       },
    //       complete: function () {
    //         wx.switchTab({
    //           url: '../index/index',
    //           success: function (res) { },
    //           fail: function (res) { },
    //           complete: function (res) { },
    //         })
    //       }
    //     })
    // wx.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       //已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.login({
    //       success: function (res) {
    //         if(res.code){
    //           var code = res.code; 
    //           console.log(code);
    //           wx.getUserInfo({
    //             success: function (res) {
    //               //console.log(res.userInfo.avatarUrl);
    //               that.setData({
    //                 userInfo: {
    //                   avatarUrl: res.userInfo.avatarUrl,//用户头像  
    //                   nickName: res.userInfo.nickName//用户昵称  
    //                 }
    //               }),
    //                 wx.request({
    //                   url: 'https://6kxrdzrv.qcloud.la/login/add_user',
    //                   data: {
    //                     code: code,
    //                     user_name: that.data.userInfo.nickName,
    //                     user_logo: that.data.userInfo.avatarUrl
    //                   },
    //                   success: function (res) {
    //                     wx.setStorageSync('uid', res.data);
    //                     console.log('success');
    //                   }
    //                 })
    //             }

    //           })
    //         }
    //       },
    //       complete: function () {
    //         console.log('complete');
    //         wx.switchTab({
    //           url: '../index/index',
    //           success: function (res) { },
    //           fail: function (res) { },
    //           complete: function (res) { },
    //         })
    //       }
    //      })
         
    //     }
    //   }
    // })
  },
  bindGetUserInfo: function () {
    wx.switchTab({
      url: '../index/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})

    
       
 