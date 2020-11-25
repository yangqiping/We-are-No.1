// pages/start/start.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        remind:'加载中',
        angle:0,
        userInfo:{}
    },
    goToIndex:function(){
        wx.switchTab({
          url: '/pages/index/index',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        wx.setNavigationBarTitle({
            title: wx.getStorageSync('mallName')
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var that = this;
        setTimeout(function() {
        that.setData({
            remind: ''
        });
        }, 1000);
        wx.onAccelerometerChange(function(res) {
        var angle = -(res.x * 30).toFixed(1);
        if (angle > 14) {
            angle = 14;
        } else if (angle < -14) {
            angle = -14;
        }
        if (that.data.angle !== angle) {
            that.setData({
            angle: angle
            });
        }
        });
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let that = this
        let userInfo = wx.getStorageSync('userInfo')
        if (!userInfo) {
        wx.getUserInfo({
            success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
                userInfo: res.userInfo,
            })
            }
        })
        } else {
        that.setData({
            userInfo: userInfo
        })
        }
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