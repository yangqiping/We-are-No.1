// pages/all/all.js
var datalist0 = require('../../utils/jieqi.js');
var datalist1 = require('../../utils/jieri.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let jie = wx.getStorageSync('jie');
        if(jie=='jieqi'){
            wx.setNavigationBarTitle({
              title: '全部节气',
            })
            this.setData({
                dataListA:datalist0.dataList
            })
        }else{
            wx.setNavigationBarTitle({
                title: '全部节日',
            })
            this.setData({
                dataListA:datalist1.dataList
            })
        }
    },
    goToDetail:function(e){
        let id=e.currentTarget.dataset.id;
        console.log(id)
        wx.navigateTo({
            url: '/pages/detail/detail?id=' +id
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