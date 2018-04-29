// pages/myInfo/myInfo.js
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
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    var that=this; 
    var uid = wx.getStorageSync('uid');
    //console.log(uid);
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/user/select_user',
      data:{
        uid:uid
      },
      dataType: 'json',
      //responseType:'text', 
      success: function (res) { 
        //console.log(res);
        that.setData({
          userInfo:res.data[0]
        }) 
      } 
    }); 
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
      url: '../articles/articles',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  to_notes: function () {
    wx.navigateTo({
      url: '../notes/notes',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  to_private_message:function(){
    wx.navigateTo({
      url: '../private_message/private_message',
    })
  },
  to_money: function () {
    wx.navigateTo({
      url: '../money/money',
    })
  }
})