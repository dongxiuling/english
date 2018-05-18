// pages/put_note/put_note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head_url: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
    imageurl: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
    note_id: [],
    note: [],
    comments: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.note_id = options.id;
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Welcome/this_note',
      responseType: 'text',
      data: { note_id: that.data.note_id },
      success: function (res) {
        that.setData({
          note: res.data
        })
      }
    })
    // wx.request({
    //   url: 'https://6kxrdzrv.qcloud.la/Welcome/note_com',
    //   responseType: 'text',
    //   data: { note_id: that.data.note_id },
    //   success: function (res) {
    //     that.setData({
    //       comments: res.data
    //     })
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

  // zan: function (e) {
  //   this.data.id = this.data.note_id;
  //   var that = this;
  //   wx.getStorage({
  //     key: that.data.id,
  //     success: function (res) {
  //       if (res.data == 'true') {
  //         wx.request({
  //           url: 'https://6kxrdzrv.qcloud.la/Welcome/zan4',
  //           responseType: 'text',
  //           data: {
  //             id: that.data.id,
  //           },
  //           success: function (res) {
  //             wx.setStorage({ key: that.data.id, data: 'false' });
  //             that.setData({
  //               note: res.data
  //             })
  //           }
  //         })
  //       } else {
  //         wx.request({
  //           url: 'https://6kxrdzrv.qcloud.la/Welcome/cancel4',
  //           responseType: 'text',
  //           data: {
  //             id: that.data.id,
  //           },
  //           success: function (res) {
  //             wx.setStorage({ key: that.data.id, data: 'true' });
  //             that.setData({
  //               note: res.data
  //             })
  //           }
  //         })
  //       }
  //     },
  //     fail: function (res) {
  //       wx.request({
  //         url: 'https://6kxrdzrv.qcloud.la/Welcome/zan4',
  //         responseType: 'text',
  //         data: {
  //           id: that.data.id,
  //         },
  //         success: function (res) {
  //           wx.setStorage({ key: that.data.id, data: 'false' });
  //           that.setData({
  //             note: res.data
  //           })
  //         }
  //       })
  //     }
  //   })
  // }
})