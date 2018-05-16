// pages/private_message/alter/alter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: '2016-11-08',
    objectArray: ['男', '女'],
    location: ['山东', '上海', '北京', '天津', '新疆', '西藏', '四川', '青海', '云南', '海南', '香港', '台湾', '浙江', '江苏', '贵州', '河南', '河北', '澳门', '山西', '陕西'],
    imgUrl:"",
    school:'',
    introduce:"",
    index:0,
    sex:"",
    name:'',
    ll:2,
    place:'',
    filePath: ""

  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  //  点击性别组件确定事件  
  bindPickerChange1: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  //  点击城市组件确定事件  
  bindPickerChange2: function (e) {
    this.setData({
      ll: e.detail.value
    })
  },
 //上传图片
  choose: function () {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        console.log(res.tempFilePaths[0]);
        that.setData({
          imgUrl: res.tempFilePaths[0]
        })
        wx.uploadFile({
          url: 'https://6kxrdzrv.qcloud.la/Article/upFile',
          filePath: that.data.imgUrl,
          name: 'file',
          success: function (data) {
            let str = 'https://6kxrdzrv.qcloud.la/' + data.data.replace('./', '');
            that.setData({
              filePath: str
            });
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var uid=wx.getStorageSync("uid");
  var that=this;
  wx.request({
    url: 'https://6kxrdzrv.qcloud.la/user/select_user',
    data: {
      'uid': uid,
    },
    success:function(res)
    {
      that.setData({
        imgUrl: res.data[0].logo_url,
        school: res.data[0].school,
        introduce: res.data[0].introduce,
        sex: res.data[0].sex,
        place: res.data[0].location,
        dates:res.data[0].birthday,
        name:res.data[0].user_name,
      });
      if(that.data.sex=='男')
      {
        that.setData({
          index:0,
        });
      }
      else{
        that.setData({
          index: 1,
        });
      }
      for(var i=0;i<that.data.location.length;i++)
      {
        if (that.data.location[i] == that.data.place)
        {
          that.setData({
            ll: i,
          });
        }
      }
    }
  })
  },
// 按钮事件
  formSubmit: function (e) {
    var that = this;
    var img='';
    var uid=wx.getStorageSync("uid");
    if (that.data.filePath=='')
    {
      img=that.data.imgUrl;
    }
    else{
      img = that.data.filePath;
    }
    if (that.data.index == 0) {
      that.setData({
        sex: '男',
      });
    }
    else {
      that.setData({
        sex:'女',
      });
    }
    that.setData({
      place:that.data.location[that.data.ll],
    });
    console.log(that.data);
    wx.request({
      url: 'https://6kxrdzrv.qcloud.la/user/alter_user',
      data: {
        uid:uid,
        imgUrl: img,
        school: that.data.school,
        introduce: that.data.introduce,
        sex: that.data.sex,
        place: that.data.place,
        dates: that.data.dates,
        name: that.data.name,
      },
      success: function (res) {
        console.log(res.data);
        wx.navigateTo({
          url: '../private_message?id=' + uid,
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
  // 获取值
  blurschool:function(e)
  {
    console.log(e.detail.value)
    this.setData({
      school:e.detail.value,
    });
  },
  focusname: function (e) {
    var that = this;
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value,
    });
    console.log(that.data.name);
  },
  blurintel: function (e) {
    var that=this;
    console.log(e.detail.value)
    this.setData({
      introduce: e.detail.value,
    });
    console.log(that.data.introduce);
  },
})
