// pages/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://6kxrdzrv.qcloud.la/user/select_user',
    //   //dataType:'json',
    //   responseType:'text',
    //   success:function(res){
    //     console.log(res);
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
  }
})