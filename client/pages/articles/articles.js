// pages/articles/articles.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head_url: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
    imageurl: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
    articles:{},
    uid:[],
    the_id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.uid[0] = parseInt(options.id);
    this.data.id = parseInt(options.id); 
    this.data.the_id = parseInt(options.id);
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Welcome/my_articles',
      responseType:'text',
      data: { id: that.data.id},
      success:function(res){
        that.setData({
          articles:res.data
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
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Welcome/my_articles',
      responseType:'text',
      data: { id: that.data.the_id},
      success:function(res){
        that.setData({
          articles:res.data
        })
      }
    })
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

  toPublish: function () {
    wx.navigateTo({
      url: '../issue/issue',
    })
  },
  toPut_art: function (e) {
    wx.navigateTo({
      url: '../put_art/put_art?id=' + e.currentTarget.id,
    })
  },
  zan:function(e){
    this.data.id = e.target.dataset.id;
    var that = this;
    wx.getStorage({ 
      key: e.target.dataset.id,
      success:function(res){
        if(res.data=='true'){
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/zan',
            responseType: 'text',
            data: {
              id: that.data.id,
              uid: that.data.uid[0]
            },
            success: function (res) {
              wx.setStorage({ key: e.target.dataset.id, data: 'false' });
              that.setData({
                articles:res.data
              })
            }
          })
        }else{
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/cancel',
            responseType: 'text',
            data: {
              id: that.data.id,
              uid: that.data.uid[0]
            },
            success: function (res) {
              wx.setStorage({ key: e.target.dataset.id, data: 'true' });
              that.setData({
                articles: res.data            
              })
            }
          })
        }
      },
      fail:function(res){
        wx.request({
          url: 'https://6kxrdzrv.qcloud.la/Welcome/zan',
          responseType: 'text',
          data: {
            id: that.data.id,
            uid: that.data.uid[0]
          },
          success: function (res) {
            wx.setStorage({ key: e.target.dataset.id, data: 'false' });
            that.setData({
              articles: res.data
            })
          }
        })
      }
    })
  }
})