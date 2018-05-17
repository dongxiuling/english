var md5 = require('../../utils/myMd5.js');
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
const app = getApp();
var user = wx.getStorageSync('uid');
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
    show:true,
    audioSrc:'',
    sentence:{},
    numss:1,
    wordsId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;   
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    var appKey = '2f02f726dea1c7f3';
    var key = 'Jsba6T8JFxvYfXPUdEUEP7I8GwSjL3dJ';
    var salt = (new Date).getTime();
    var query = options.searchContent;
    that.setData({
      word:options.searchContent
    });    
    var from = '';
    var to = '';
    var str1 = appKey + query + salt + key;
    var sign = md5(str1);
    var iid = that.data.wordsId;
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
        if (reg.test(query)) {
          that.setData({
            word: res.data.query,
            audioSrc: res.data.tSpeakUrl,
            cont: res.data.basic.explains
          });
        } else {
          that.setData({
            word: res.data.query,
            audioSrc: res.data.speakUrl,
            cont: res.data.basic.explains
          });
        }
        
      }
    });
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/sentence/select_sentence',
      data:{
        word:query
      },
      success:function(res){
        that.setData({
          sentence:res.data
        })
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
    var that = this;
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/words/selectWords',
      data:{
        name:that.data.word
      },
      success:function(res){
        that.setData({
          wordsId: res.data[0].words_id
        });
        wx.request({
          url: 'https://6kxrdzrv.qcloud.la/Note/select_note',
          data: {
            words_id: that.data.wordsId,
            user_id:wx.getStorageSync('uid')
          },
          success: function (res) {
            console.log(res);
            that.setData({
              noteFile: res.data
            });

          }
        }),
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Voice/select_voice',
            data: {
              words_id: that.data.wordsId
            },
            success: function (res) {
              console.log(res);
              that.setData({
                voiceFile: res.data
              });
            }
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
  //取消回首页
  backIndex:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  //跳转创建笔记页
  goCreate:function(){
    var that = this;
    var words = that.data.word;
    wx.navigateTo({
      url: '../createNote/createNote?words='+words,
    })
  },
  
  
  changeShow: function () {
    this.setData({
      show: true
    })
    // console.log(this.data.show);
  },
  changeShowVoice: function () {
    this.setData({
      show: false
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
    var that = this;
    recorderManager.stop();
    recorderManager.onStop((res) => {
      console.log('停止录音', res.tempFilePath);
      that.setData({
        voicePath: res.tempFilePath
      });
      wx.showModal({
        title: '提示',
        content: '确定上传吗?',
        success: function (res) {
          var user = wx.getStorageSync('uid');
          if (res.confirm) {
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
            wx.uploadFile({
              url: 'https://6kxrdzrv.qcloud.la/Voice/upVoiceFile',
              filePath: that.data.voicePath,
              name: 'file',
              success: function (data) {
                let str = 'https://6kxrdzrv.qcloud.la/' + data.data.replace('./', '');
                that.setData({
                  upvoicePath: str
                });
                wx.request({
                  url: 'https://6kxrdzrv.qcloud.la/Words/selectWords',
                  data:{
                    name: that.data.word
                  },
                  success:function(res){
                    that.setData({
                      wordsId: res.data[0].words_id
                    });
                    wx.request({
                      url: 'https://6kxrdzrv.qcloud.la/Voice/insertVoice',
                      data: {
                        Voice_url: that.data.upvoicePath,
                        user_id: user,
                        wordsId: that.data.wordsId
                      },
                      success:function(){
                        wx.request({
                          url: 'https://6kxrdzrv.qcloud.la/Voice/select_voice',
                          data: {
                            words_id: that.data.wordsId
                          },
                          success: function (res) {
                            console.log(res);
                            that.setData({
                              voiceFile: res.data
                            });

                          }
                        })
                      }
                    })
                  }
                })
               
              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })

    })
  },

  createVoice: function (e) {
    var that = this;
    var num = e.target.dataset.id;
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true,

      innerAudioContext.src = that.data.voiceFile[num].url,
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },


  //收藏笔记
  collection:function(event){
    var that = this;
    var aa = event.currentTarget.dataset['id'];
    // var myNewNote = that.data.noteFile[aa];
    // var myContent = myNewNote.content;
    var user = wx.getStorageSync('uid');
    var style = 'green';
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/CollectNote/selectCollect',
      data:{
        note_id: aa,
        user_id: user,
      },
      success:function(res){
        console.log(res.data)
        if(res.data == ''){
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/CollectNote/insert',
            data: {
              note_id: aa,
              user_id: user,
              flag: style
            },
            success: function (res) {
              console.log(res);
              wx.request({
                url: 'https://6kxrdzrv.qcloud.la/Note/select_note',
                data: {
                  words_id: that.data.wordsId,
                  user_id:user
                },
                success: function (res) {
                  console.log(res);
                  that.setData({
                    noteFile: res.data
                  });
                }
              })
            }
          })
        }else{
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/CollectNote/cancelCollect',
            data:{
              note_id: aa,
              user_id: user,
            },
            success:function(){
              wx.request({
                url: 'https://6kxrdzrv.qcloud.la/Note/select_note',
                data: {
                  words_id: that.data.wordsId
                },
                success: function (res) {
                  console.log(that.data.wordsId);
                  that.setData({
                    noteFile: res.data
                  });
                }
              })
            }
          })
        }
      }
    })
   
  },
  //收藏语音笔记
  collectionVoice: function (e) {
    var that = this;
    console.log(that.data.voiceFile);
   
    var aa = e.target.dataset.id;
    var myNewNote = that.data.voiceFile[aa];
    var user = wx.getStorageSync('uid');   
    var style = 'green';
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/CollectNote/selectVoice',
      data: {
        voice_id: aa,
        user_id: user,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data == '') {
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/CollectNote/insertVoice',
            data: {
              voice_id: aa,
              user_id: user,
              flag: style
            },
            success: function (res) {
              wx.request({
                url: 'https://6kxrdzrv.qcloud.la/Voice/select_voice',
                data: {
                  words_id: that.data.wordsId,
                  user_id:user
                },
                success: function (res) {
                  console.log(res);
                  that.setData({
                    voiceFile: res.data
                  });

                }
              })
            }
          })
        } else {
          wx.request({
            url: 'https://6kxrdzrv.qcloud.la/CollectNote/cancelvoice',
            data: {
              voice_id: aa,
              user_id: user,
            },
            success: function () {
              wx.request({
                url: 'https://6kxrdzrv.qcloud.la/Voice/select_voice',
                data: {
                  words_id: that.data.wordsId
                },
                success: function (res) {
                  console.log(that.data.wordsId);
                  that.setData({
                    voiceFile: res.data
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