//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
   rank:{},

   imgUrls: [
     {
       link: '../../image/head.png',
       url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524234665843&di=3415c834dba831f6cb1712f502759205&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F59%2F74%2F02R58PICYSF_1024.jpg'
     },{
       link: '../../image/head.png',
       url: 'http://img.taopic.com/uploads/allimg/130613/318768-13061301200757.jpg'
     }, {
       link: '../../image/head.png',
       url: 'http://pic3.16pic.com/00/04/36/16pic_436094_b.jpg'
     }
   ], 
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    searchText: '',
    articleInfo:''
  },
  
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
  },
  onLoad:function(){
    var that = this;
    wx.pageScrollTo({
      scrollTop: 0
    }),
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/user/select_coin',
      success:function(res){
          that.setData({
            rank:res.data
          })
      }
    })
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/Article/select_article',
      success:function(res){
        that.setData({
          articleInfo:res.data
        });
      }
    })
    wx.showToast({
      title: '加载中...',
      icon:"loading",
      duration:500
    })
    
  },
  //事件处理函数
  //请求数据
  



  //获取输入框的值
  getText:function(e){
    this.setData({
      searchText: e.detail.value
    })
  },
  //跳转单词详情页
  toWord:function(){  
    if(this.data.searchText != ''){
      var searchContent = this.data.searchText;
      wx.navigateTo({
        url: '../word/word?searchContent='+searchContent,
      })
    }   
  },
  toPut_art:function(){
    wx.navigateTo({
      url: '../put_art/put_art',
    })
  }
})
