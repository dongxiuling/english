// pages/money/gords/gords.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    // imageUrl: ['../../../images/gords1.jpg', '../../../images/gords2.jpg', '../../../images/gords3.jpg', '../../../images/gords4.jpg', '../../../images/gords5.jpg', '../../../images/gords6.jpg'],
    // name: ['神奇洗面奶', '佳能照相机', '鳄鱼腰带', '玉色茶具', '康佳旅游鞋', '宝鉴奶粉'],
    // privce:['200','400','600','700','100','500'],
    // index:['0','1','2','3','4','5'],
    goods:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that=this;
   wx.request({
     url: 'https://6kxrdzrv.qcloud.la/money/select_goods',
     data:{},
     success:function(res)
     {
       that.setData({
          'goods':res.data,
       });
       console.log(res.data);
     }
   });
   var uid = wx.getStorageSync('uid');
   wx.request({
     url: 'https://6kxrdzrv.qcloud.la/money/select_money',
     data:
     {
       user_id: uid,
     },
     success: function (res) {
       that.setData({
         "num": res.data[0].coin,
       });
     }
   })
  },
  bind:function(e)
  {
    var uid = wx.getStorageSync('uid');
    var that=this;
    var id=e.currentTarget.dataset.id;
    var num=e.currentTarget.dataset.num;
    var price=e.currentTarget.dataset.price;
    var yue = e.currentTarget.dataset.yue;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          //已经授权，可以直接调用 getUserInfo 获取头像昵称
          if (yue >= price) {
            wx.request({
              url: 'https://6kxrdzrv.qcloud.la/money/update_goods',
              data: {
                'goods_id': id,
                'coin': yue - price,
                'user_id': uid,
              },
              success: function (res) {
                that.setData({
                  'goods': res.data,
                  "num": yue - price,
                })
                wx.showToast({
                  title: '兑换成功',
                  icon: 'sucess'
                });
              }
            })
          }
          else {
            wx.showToast({
              title: '余额不足',
              icon: 'none'
            });
          }


        } else {
          //return false;
          wx.showModal({
            title: '提示',
            content: '您还没有登录，点击确定按钮前往登录',
            success: function (res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: '../../login/login',
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
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