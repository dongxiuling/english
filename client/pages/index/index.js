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
        article:'',
        show:false
    },

    bindFormSubmit: function (e) {
        console.log(e.detail.value.textarea)
    },
    onLoad:function(){
        this.data.uid = parseInt(wx.getStorageSync('uid'));
        var that = this;
        // wx.getSetting({
        //   success: function (res) {
        //     if (res.authSetting['scope.userInfo']) {
        //       //已经授权，可以直接调用 getUserInfo 获取头像昵称
        //       wx.login({
        //         success: function (res) {
        //           if (res.code) {
        //             var code = res.code;
        //             console.log(code);
        //             wx.getUserInfo({
        //               success: function (res) {
        //                 //console.log(res.userInfo.avatarUrl);
        //                 that.setData({
        //                   userInfo: {
        //                     avatarUrl: res.userInfo.avatarUrl,//用户头像
        //                     nickName: res.userInfo.nickName//用户昵称
        //                   }
        //                 }),
        //                   wx.request({
        //                     url: 'https://6kxrdzrv.qcloud.la/login/add_user',
        //                     data: {
        //                       code: code,
        //                       user_name: that.data.userInfo.nickName,
        //                       user_logo: that.data.userInfo.avatarUrl
        //                     },
        //                     success: function (res) {
        //                       wx.setStorageSync('uid', res.data);
        //                       console.log(wx.getStorageSync('uid'));
        //                     }
        //                   })
        //               }

        //             })
        //           }
        //         },
        //         complete: function () {
        //           console.log('complete');
        //           wx.switchTab({
        //             url: '../index/index',
        //             success: function (res) { },
        //             fail: function (res) { },
        //             complete: function (res) { },
        //           })
        //         }
        //       })

        //     }
        //   }
        // }),
        wx.pageScrollTo({
            scrollTop: 0
        }),
            wx.request({
                url: 'https://6kxrdzrv.qcloud.la/user/select_coin',
                success:function(res){
                    that.setData({
                        rank: res.data
                    })
                }
            })
        wx.request({
            url: 'https://6kxrdzrv.qcloud.la/Article/select_article',
            data:{
                uid: that.data.uid
            },
            success:function(res){
                that.setData({
                    article:res.data
                });
            }
        })
        wx.showToast({
            title: '加载中...',
            icon:"loading",
            duration:500
        })
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    //已经授权，可以直接调用 getUserInfo 获取头像昵称
                    that.setData({
                        show:true
                    });
                }
                // else {
                //   //return false;
                //   wx.showModal({
                //     title: '提示',
                //     content: '您还没有登录，点击确定按钮前往登录',
                //     success: function (res) {
                //       if (res.confirm) {
                //         wx.redirectTo({
                //           url: '../login/login',
                //         })
                //       } else if (res.cancel) {
                //         console.log('用户点击取消')
                //       }
                //     }
                //   })
                // }
            }
        })
    },

    //事件处理函数
    //请求数据
    onShow:function(){

        var that = this;
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    //已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.login({
                        success: function (res) {
                            if (res.code) {
                                var code = res.code;
                                //console.log(code);
                                wx.getUserInfo({
                                    success: function (res) {
                                        //console.log(res.userInfo.avatarUrl);
                                        that.setData({
                                            userInfo: {
                                                avatarUrl: res.userInfo.avatarUrl,//用户头像
                                                nickName: res.userInfo.nickName//用户昵称
                                            }
                                        }),
                                            wx.request({
                                                url: 'https://6kxrdzrv.qcloud.la/login/add_user',
                                                data: {
                                                    code: code,
                                                    user_name: that.data.userInfo.nickName,
                                                    user_logo: that.data.userInfo.avatarUrl
                                                },
                                                success: function (res) {
                                                    wx.setStorageSync('uid', res.data);
                                                    //console.log(wx.getStorageSync('uid'));
                                                }
                                            })
                                    }

                                })
                            }
                        },
                        complete: function () {
                            //console.log('complete');
                            wx.switchTab({
                                url: '../index/index',
                                success: function (res) { },
                                fail: function (res) { },
                                complete: function (res) { },
                            })
                        }
                    })

                }
            }
        }),
            wx.request({
                url: 'https://6kxrdzrv.qcloud.la/user/select_coin',
                success: function (res) {
                    that.setData({
                        rank: res.data
                    })
                }
            }),
            wx.request({
                url: 'https://6kxrdzrv.qcloud.la/Article/select_article',
                data: {
                    uid: that.data.uid
                },
                success: function (res) {
                    that.setData({
                        article: res.data
                    });
                }
            })
    },



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
    toPut_art:function(e){
        wx.navigateTo({
            url: '../put_art/put_art?id=' + e.currentTarget.id,
        })
    },
    toThis_message:function (e) {
        wx.navigateTo({
            url: '../private_message/private_message?id=' + e.currentTarget.id,
        })
    },
    admire:function(e){
        // console.log(this.data.article);
        this.data.id = this.data.article[e.currentTarget.id].article_id;
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
                // console.log(res.data);
                if (res.data == '') {
                    wx.request({
                        url: 'https://6kxrdzrv.qcloud.la/Welcome/zan2',
                        responseType: 'text',
                        data: {
                            id: that.data.id,
                            uid: that.data.uid
                        },
                        success: function (res) {
                            wx.request({
                                url: 'https://6kxrdzrv.qcloud.la/Article/select_article',
                                data: {
                                    uid: that.data.uid
                                },
                                success:function(res){
                                    that.setData({
                                        article:res.data
                                    });
                                }
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
                            wx.request({
                                url: 'https://6kxrdzrv.qcloud.la/Article/select_article',
                                data: {
                                    uid: that.data.uid
                                },
                                success: function (res) {
                                    that.setData({
                                        article: res.data
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
