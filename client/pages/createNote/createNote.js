// pages/createNote/createNote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     content:"",
     word:'',
     wordsId:''
  },
  do_note: function (e) {
    this.setData({
      content: e.detail.value
    })
  },
  finish: function () {
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Words/selectWords',
      data:{
        name:that.data.word
      },
      success:function(res){
        console.log(res.data[0].words_id);
        that.setData({
          wordsId:res.data[0].words_id
        });
        console.log(that.data.wordsId)
        
        wx.request({
          url: 'https://6kxrdzrv.qcloud.la/Note/add_note',
          data: {
            content: that.data.content,
            user_id: wx.getStorageSync('uid'),
            wordsId: res.data[0].words_id
          },
          success: function (res) {
            console.log(res.data);
            wx.navigateBack({
              url:'../word/word'
            })
          }
        })
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this;
     that.setData({
       word:options.words
     });
     wx.request({
       url: 'https://6kxrdzrv.qcloud.la/Words/insertWords',
       data: {
         words: that.data.word
       },
       success: function (res) {
         that.setData({
           wordsId: res.data
         });
       }
     })
     console.log(that.data.word)
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