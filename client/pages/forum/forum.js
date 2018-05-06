// pages/forum/forum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     head_url: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
     imageurl: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
    articleInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Article/select_allArticle',
      success: function (res) {
        that.setData({
          articleInfo: res.data
        });
        console.log(res.data);
      }
    })
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
  toPublish:function(){
    wx.navigateTo({
      url: '../issue/issue',
    })
  },
  toPut_art:function(e){
    wx.navigateTo({
      url: '../put_art/put_art?id='+e.currentTarget.id,
    })
  }
  
})