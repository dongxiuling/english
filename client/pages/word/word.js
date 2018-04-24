var md5 =  require('../../utils/md5.js');
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
const app = getApp();
var tempFilePath;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordOne:'wordOne',
    wordTwo: 'wordTwo',
    cont:'笔记',
    contt:'desc',
    auther:'all',
    audioSrc:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var appKey = '2f02f726dea1c7f3';
    var key = 'Jsba6T8JFxvYfXPUdEUEP7I8GwSjL3dJ';
    var salt = (new Date).getTime();
    var query = options.searchContent;
    var from = '';
    var to = '';
    var str1 = appKey + query + salt + key;
    var str2 = encodeURI(str1);
    var sign = md5.hex_md5(str2);

    
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
        that.setData({
          word:res.data.query,
          audioSrc: res.data.speakUrl,
          cont:res.data.translation
        });
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
  },
  //播放语音
  audioPlay:function(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true,
      innerAudioContext.src = this.data.audioSrc,
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  //去发音
  /*
  startVoice:function(){ 
    const options = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'mp3',
      frameSize: 50
    }    
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    }),
    recorderManager.onError((res) => {
        console.log("有错误");
    })
  },
  stopVoice:function(){
    recorderManager.stop();
    recorderManager.onStop((res) => {
      console.log(res.tempFilePath);
    })
  }*/
  // startVoice: function () {
  //   const options = {
  //     duration: 10000,//指定录音的时长，单位 ms
  //     sampleRate: 16000,//采样率
  //     numberOfChannels: 1,//录音通道数
  //     encodeBitRate: 96000,//编码码率
  //     format: 'mp3',//音频格式，有效值 aac/mp3
  //     frameSize: 50,//指定帧大小，单位 KB
  //   }
  //   //开始录音
  //   recorderManager.start(options);
  //   recorderManager.onStart((res) => {
  //     console.log('recorder start',res);
  //   });
  //   //错误回调
  //   recorderManager.onError((res) => {
  //     console.log(res);
  //   })
  // },
  // //停止录音
  // stopVoice: function () {
  //   recorderManager.stop();
  //   recorderManager.onStop((res) => {
  //     console.log('停止录音', res.tempFilePath);
  //   })

  // },

  start: function () {
    const options = {
      duration: 10000,//指定录音的时长，单位 ms
      sampleRate: 16000,//采样率
      numberOfChannels: 1,//录音通道数
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小，单位 KB
    }
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },
  //停止录音
  end: function () {
    recorderManager.stop();
    recorderManager.onStop((res) => {
      console.log('停止录音', res.tempFilePath);
    })

  },
})