Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    content:"",
    imgUrl:""
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
        //console.log(that.data.filePath)
        wx.saveFile({
          tempFilePath: res.tempFilePaths[0],
          success:function(res){
            wx.uploadFile({
              url: 'https://6kxrdzrv.qcloud.la',
              filePath: res.savedFilePath,
              name: 'file',
              success: function (res) {
                console.log(res)
              }
            })
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
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Article/insert_article',
      data:{
        title:that.data.title,
        content:that.data.content,
        imgUrl:that.data.imgUrl
      },
    })
    console.log(that.data);
    wx.switchTab({
      url: '../forum/forum',
    })
  }
})