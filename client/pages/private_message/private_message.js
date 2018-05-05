// pages/private_message/private_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     article:"",
     note:"",
     follow:"",
     fans:"",
     user:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
   var uid=wx.getStorageSync('uid');
   console.log(uid);
   wx.request({
     url: 'https://6kxrdzrv.qcloud.la/message/select_message',
     data:{
       'user_id':uid,
     },
     success:function(res)
     {
       console.log(res.data);
       that.setData({
         'article': res.data[0][0].one,
         'note': res.data[1][0].two*1 + res.data[2][0].three*1,
         'follow': res.data[3][0].four,
         'fans': res.data[4][0].five,
         'user': res.data[5][0],
       });
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