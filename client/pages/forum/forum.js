// pages/forum/forum.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     head_url: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
     imageurl: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg',
    article:"",
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.uid = parseInt(wx.getStorageSync('uid'));
    var that = this;
    if(app.data.article){
      that.setData({
        article:app.data.article
      })
    }else{
      wx.request({
        url: 'https://6kxrdzrv.qcloud.la/Article/select_allArticle',
        data: {
          uid: that.data.uid
        },
        success: function (res) {
          that.setData({
            article: res.data
          });
        }
      })
    }
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          //已经授权，可以直接调用 getUserInfo 获取头像昵称
          that.setData({
            show: true
          });
        } 
        // else {
        //   //return false;
        //   wx.showModal({
        //     title: '提示',
        //     content: '您还没有登录，点击确定按钮前往登录',
        //     success: function (res) {
        //       if (res.confirm) {
        //         wx.redirectTo({
        //           url: '../login/login',
        //         })
        //       } else if (res.cancel) {
        //         console.log('用户点击取消')
        //       }
        //     }
        //   })
        // }
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
      url: 'https://6kxrdzrv.qcloud.la/Article/select_allArticle',
      data: {
        uid: that.data.uid
      },
      success: function (res) {
        that.setData({
          article: res.data
        });
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
  toPublish:function(){
    wx.navigateTo({
      url: '../issue/issue',
    })
  },
  toPut_art:function(e){
    wx.navigateTo({
      url: '../put_art/put_art?id='+e.currentTarget.id,
    })
  },
  toThis_message: function (e) {
    wx.navigateTo({
      url: '../private_message/private_message?id=' + e.currentTarget.id,
    })
  },
  admire: function (e) {
    this.data.id = this.data.article[e.currentTarget.id].article_id;
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Welcome/judge',
      responseType: 'text',
      data: {
        id: that.data.id,
        uid: that.data.uid
      },
      complete: function (res) {
        if (res.data == '') {
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/zan2',
            responseType: 'text',
            data: {
              id: that.data.id,
              uid: that.data.uid
            },
            success: function (res) {
              wx.request({
                url: 'https://6kxrdzrv.qcloud.la/Article/select_allArticle',
                data: {
                  uid: that.data.uid
                },
                success: function (res) {
                  that.setData({
                    article: res.data
                  });
                }
              })
            }
          })
        } else {
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/cancel2',
            responseType: 'text',
            data: {
              id: that.data.id,
              uid: that.data.uid
            },
            success: function (res) {
              wx.request({
                url: 'https://6kxrdzrv.qcloud.la/Article/select_allArticle',
                data: {
                  uid: that.data.uid
                },
                success: function (res) {
                  that.setData({
                    article: res.data
                  });
                }
              })
            }
          })
        }
      }
    })
  }
  
})