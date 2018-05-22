// pages/private_message/private_message.js
//55
Page({

  /**
   * 页面的初始数据
   */
  data: {
     article:"",
     note:"",
     follow:"",
     fans:"",
     user:"",
     flag:"",
     flag2:"",
     uid:"",
     mid:"",
     isFollow:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var uid = options.id;
   this.data.uid = uid; 
   var mid = parseInt(wx.getStorageSync('uid'));
   this.data.mid = mid;
   var that =this;
   if(uid==mid){
     that.setData({
       flag:2
     })
   }else{
     that.setData({
       flag:1
     })
   }
   wx.request({
     url:
'https://6kxrdzrv.qcloud.la/user/select_follow',
     data: {
       'uid': uid,
       'mid': mid
     },
     success:function(res){
       if(res.data==''){
         that.setData({
           flag2: true,
           isFollow: '+关注'
         }) 
       }else{
         that.setData({
           flag2: false,
           isFollow: '取消关注'
         })
       }
     }
   })
   wx.request({
     url: 'https://6kxrdzrv.qcloud.la/message/select_message',
     data:{
       'user_id':uid,
     },
     success:function(res)
     {
       that.setData({
         'article': res.data[0][0].one,
         'note': res.data[1][0].two*1 + res.data[2][0].three*1,
         'follow': res.data[3][0].four,
         'fans': res.data[4][0].five,
         'user': res.data[5][0],
       });
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
  // the_follow:function(){
  //   var that = this;
  //   if (that.data.flag2) {
  //     wx.request({
  //       url: 'https://6kxrdzrv.qcloud.la/user/add_follow',
  //       data:{
  //         uid:that.data.uid,
  //         mid:that.data.mid
  //       },
  //       success:function(res){
  //         that.data.flag2 = !that.data.flag2
  //         that.setData({
  //           isFollow: '取消关注'
  //         })
  //       }
  //     })
  //   } else {
  //     wx.request({
  //       url: 'https://6kxrdzrv.qcloud.la/user/delete_follow',
  //       data: {
  //         uid: that.data.uid,
  //         mid: that.data.mid
  //       },
  //       success: function (res) {
  //         that.data.flag2 = !that.data.flag2
  //         that.setData({
  //           isFollow: '+关注'
  //         })
  //       }
  //     })
  //   }
  // }
})