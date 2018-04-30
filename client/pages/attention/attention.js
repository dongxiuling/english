// pages/attention/attention.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      attention:{},
      show:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var uid = wx.getStorageSync('uid');
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/attention/select_follow',
      data:{
        uid: uid
      },
      success:function(res){
        if(res.data.length != 0){
          that.setData({
            show:'false'
          })
        
        }else{
          that.setData({
            show: 'true'
          })
       
        }
        that.setData({
          attention:res.data
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
  delete:function(e){
    var follow_id =e.detail.value.follow_id;
    var uid = wx.getStorageSync('uid');
    console.log(uid);
    console.log(follow_id);
    wx.showModal({
      title: '温馨提示',
      content: '取消关注',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/attention/delete_follow',
            data:{
              follow_id: follow_id,
              uid:uid
            },
            success:function(){
              wx.redirectTo({
                url: './attention',
                success: function(res) {},
                fail: function(res) {},
                complete: function(res) {},
              })
            }
          })
        } else if (res.cancel) {
          
        }
      }
    })
  }
})