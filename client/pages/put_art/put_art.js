// pages/put_art/put_art.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        head_url:'',
        user_name:'',
        article_id: '',
        article: [],
        comments: [],
        com_cont:'',
        uid:'',
        releaseFocus: false,
        show:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.data.article_id = options.id;
        this.data.uid = parseInt(wx.getStorageSync('uid'));
        var that = this;
        wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/this_article',
            responseType: 'text',
            data: {
                article_id: that.data.article_id,
                uid: that.data.uid
            },
            success: function (res) {
                that.setData({
                    article: res.data
                })
            }
        });
        wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/this_user',
            responseType: 'text',
            data: {
                article_id: that.data.article_id,
            },
            success: function (res) {
                that.setData({
                    head_url: res.data[0].logo_url,
                    user_name: res.data[0].user_name,
                    user_id: res.data[0].user_id
                })
            }
        });
        wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/art_com',
            responseType: 'text',
            data: { article_id: that.data.article_id },
            success: function (res) {
                that.setData({
                    comments: res.data
                })
            }
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    //已经授权，可以直接调用 getUserInfo 获取头像昵称
                    that.setData({
                        show: true
                    });
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

    },

    toThis_message: function (e) {
        wx.navigateTo({
            url: '../private_message/private_message?id=' + e.currentTarget.id,
        })
    },
    zan: function (e) {
        this.data.id = this.data.article_id;
        this.data.uid = parseInt(wx.getStorageSync('uid'));
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
                            that.setData({
                                article: res.data
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
                            that.setData({
                                article: res.data
                            })
                        }
                    })
                }
            }
        })
    },
    bindReply: function (e) {
        this.setData({
            releaseFocus: true
        })
    },
    com_input:function(e){
        this.setData({
            com_cont: e.detail.value
        })
    },
    ping: function () {
        this.data.uid = parseInt(wx.getStorageSync('uid'));
        var that = this;
        wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Welcome/ping',
            responseType: 'text',
            data: {
                article_id: that.data.article_id,
                uid: that.data.uid,
                cont: that.data.com_cont
            },
            success: function (res) {
                that.setData({
                    comments: res.data,
                    releaseFocus: false,
                    com_cont: ''
                })
            }
        })
    },
    // zan_com: function (e) {
    //   this.data.id = this.data.article_id;
    //   this.data.cid = e.currentTarget.id;
    //   this.data.uid = parseInt(wx.getStorageSync('uid'));
    //   var that = this;
    //   wx.request({
    //     url: 'https://6kxrdzrv.qcloud.la/Welcome/judge2',
    //     responseType: 'text',
    //     data: {
    //       cid: that.data.cid,
    //       uid: that.data.uid
    //     },
    //     complete: function (res) {
    //       if (res.data == '') {
    //         wx.request({
    //           url: 'https://6kxrdzrv.qcloud.la/Welcome/zan3',
    //           responseType: 'text',
    //           data: {
    //             id: that.data.id,
    //             cid: that.data.cid,
    //             uid: that.data.uid
    //           },
    //           success: function (res) {
    //             that.setData({
    //               comments: res.data
    //             })
    //           }
    //         })
    //       } else {
    //         wx.request({
    //           url: 'https://6kxrdzrv.qcloud.la/Welcome/cancel3',
    //           responseType: 'text',
    //           data: {
    //             id: that.data.id,
    //             cid: that.data.cid,
    //             uid: that.data.uid
    //           },
    //           success: function (res) {
    //             that.setData({
    //               comments: res.data
    //             })
    //           }
    //         })
    //       }
    //     }
    //   })
    // }
})