// pages/help/help.js
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

  formSubmit:function(e){
      var fv = e.detail.value;
      //console.log(fv)
      if(fv.title == ""){
        wx.showModal({
          title: '小贴士',
          content: '请填写您要反馈的问题',
        
        })
      }else if(fv.content==""){
        wx.showModal({
          title: '小贴士',
          content: '请填写您要反馈的内容',

        })
      }else if(fv.connect==""){
        wx.showModal({
          title: '小贴士',
          content: '请填写您的电话号码，解决您的问题后，我们将第一时间通知您',

        })
      }else{
          wx.request({
          url: 'https://6kxrdzrv.qcloud.la/help/add_problem',
          data:{
            title:fv.title,
            content:fv.content,
            connect:fv.connect
          },
          success:function(){
            wx.showModal({
              title: '小贴士',
              content: '反馈成功，对于给您造成的不便，我们深表歉意',
              success: function (res) {
                if (res.confirm) {
                  wx.switchTab({
                    url: '../myInfo/myInfo',
                    success: function(res) {},
                    fail: function(res) {},
                    complete: function(res) {},
                  })
                } else if (res.cancel) {
                  wx.switchTab({
                    url: '../myInfo/myInfo',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                }
              }  
            })
          }
        })
      }
     
  }
})