// pages/fans/fans.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    fans:{},
    show: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var uid = wx.getStorageSync('uid');
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/fans/select_fans',
      data: {
        uid: uid
      },
      success: function (res) {
        if (res.data.length != 0) {
          that.setData({
            show: 'false'
          })

        } else {
          that.setData({
            show: 'true'
          })

        }
        that.setData({
          fans: res.data
        })
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
  
  }
})