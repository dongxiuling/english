// pages/fans/fans.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    voices:"",
    uid:"",
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.uid = wx.getStorageSync('uid');
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Welcome/my_collages2',
      data: {
        uid: that.data.uid
      },
      success: function (res) {
        that.setData({
          voices: res.data
        })
        if (res.data != "") {
          that.setData({
            show: true
          })
        }
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
  createVoice: function (e) {
    var that = this;
    var num = e.target.dataset.num;
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true,

      innerAudioContext.src = that.data.voices[num].url,
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  }
})