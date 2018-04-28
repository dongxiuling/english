Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    content:""
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
  chooseImg:function(){
    wx.chooseImage({
      success: function(res) {
        console.log(res);
        wx.uploadFile({
          url: 'https://6kxrdzrv.qcloud.la',
          filePath: res.tempFilePaths[0],
          name: 'file',
          success:function(res){
            console.log(res)
          }
        })
       
      },
    })
  },
  getTitle:function(e){
    this.setData({
      title:e.detail.value
    });
  },
  getContent:function(e){
    this.setData({
    content:e.detail.value
    });
  },
  toForum: function () {
    
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/',
      data:{
        title:this.data.title,
        content:this.data.content,
        imgUrl:this.data.imgUrl
      }
    })
    wx.switchTab({
      url: '../forum/forum?',
    })
  }
})