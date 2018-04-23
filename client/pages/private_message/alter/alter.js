// pages/private_message/alter/alter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: '2016-11-08',
    objectArray: ['男', '女'],
    location: ['山东', '上海', '北京', '天津', '新疆', '西藏', '四川', '青海', '云南', '海南', '香港', '台湾', '浙江', '江苏', '贵州', '河南', '河北', '澳门', '山西', '陕西'],
    index: 0,
    l_index:2
  },
  /*input聚焦的函数*/
  focus:function()
  {
    var that=this;
    that.className='focus';
    console.log(555);
    console.log(that);
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  //  点击性别组件确定事件  
  bindPickerChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //  点击城市组件确定事件  
  bindPickerChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      l_index: e.detail.value
    })
  },
 //上传图片
 choose:function(e)
 {
    var that=this;
    wx.chooseImage({
      count: 1, 
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        upload(that, tempFilePaths);
      }
    })
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
  
  }
})
function upload(page, path) {
  wx.showToast({
    icon: "loading",
    title: "正在上传"
  }),
    wx.uploadFile({
      url: constant.SERVER_URL + "/FileUploadServlet",
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        //和服务器约定的token, 一般也可以放在header中
        'session_token': wx.getStorageSync('session_token')
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        page.setData({  //上传成功修改显示头像
          src: path[0]
        })
      },
      fail: function (e) {
        console.log(e);
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
}