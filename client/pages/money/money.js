+-632
3-92// pages/money/money.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var user_id = 50025;
    var that=this;
    var uid = wx.getStorageSync('uid');
    console.log(uid);
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/money/select_money',
      data:
      {
        user_id:uid,
      },
      success: function (res) {
        that.setData({
          "num":res.data[0].coin,
        });
      }

    });
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

