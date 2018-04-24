var md5 =  require('../../utils/md5.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordOne:'wordOne',
    wordTwo: 'wordTwo',
    cont:'笔记',
    contt:'desc',
    auther:'all'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var appKey = '2f02f726dea1c7f3';
    var key = 'Jsba6T8JFxvYfXPUdEUEP7I8GwSjL3dJ';
    var salt = (new Date).getTime();
    var query = options.searchContent;
    var from = '';
    var to = '';
    var str1 = appKey + query + salt + key;
    var str2 = encodeURI(str1);

    var sign = md5.hex_md5(str2);

    console.log(sign);
    wx.request({
      url: 'https://openapi.youdao.com/api',
      
      data: {
        q: query,
        appKey: appKey,
        salt: salt,
        from: from,
        to: to,
        sign: sign,
      },
      success:function(res){
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log();
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
  //取消回首页
  backIndex:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  //跳转创建笔记页
  goCreate:function(){
    wx.navigateTo({
      url: '../createNote/createNote',
    })
  },
  //跳转更多笔记页
  goText:function(){
    wx.navigateTo({
      url: '../text/text',
    })
  }
})