Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    content:"",
    imgUrl:"",
    filePath:""
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
    var that = this;
    wx.chooseImage({
      success: function(res) {
        console.log(res.tempFilePaths[0]);
        that.setData({
          imgUrl:res.tempFilePaths[0]
        })
        wx.uploadFile({
            url: 'https://6kxrdzrv.qcloud.la/Article/upFile',
            filePath: that.data.imgUrl,
            name: 'file',
            success: function (data) {
            let str = 'https://6kxrdzrv.qcloud.la/' + data.data.replace('./', '');
              that.setData({
                  filePath: str
                });
              }
            })
          }
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
    
    var that = this;
    console.log(that.data.filePath);
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Article/insert_article',
      data:{
        title:that.data.title,
        content:that.data.content,
        filePath:that.data.filePath,
        userId:wx.getStorageSync('uid')
      },
    })
    
    wx.switchTab({
      url: '../forum/forum',
    })
  }
})