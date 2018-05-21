// pages/attention/attention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes:"",
    uid:"",
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.uid = parseInt(wx.getStorageSync('uid'));
    var that=this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Welcome/my_collages',
      data: { 
        uid: that.data.uid 
      },
      success: function (res) {
        if (res.data != "") {
          that.setData({
            show: true
          })
        }
        that.setData({
          notes: res.data
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

  },
  toPut_note: function (e) {
    wx.navigateTo({
      url: '../put_note/put_note?id=' + e.currentTarget.id,
    })
  }
})