// pages/index/index.js
// const jinrishici = require('../../utils/jinrishici.js')
var utils = require('../../utils/utils.js');
var datalist0 = require('../../utils/jieqi.js');
var datalist1 = require('../../utils/jieri.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    daily:[
      {
        img:'/img/daily.jpg',
        title:'《江月·十月晴江月》',
        worker:'【清】施闰章',
        content:'十月晴江月，微风夜未寒。依人光不定，照影思无端。少壮随波去，关河行路难。平生素心友，莫共此时看。'.replace(/。/g,'\n')
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = utils.formatTime(new Date());
    var lunarDate = this.getLunarDate();
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time,
      dataList0:datalist0.dataList,
      dataList1:datalist1.dataList
    });
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
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

  },
  goToSearch:function(params){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  jumpTo: function (e) {
    console.log(e)
    let option = e.currentTarget.dataset.item;
    this.setData({
      toitem: option
    })
  },
  getLunarDate: function(){
    wx.request({
      url: 'https://api.xlongwei.com/service/datetime/convert.json',
      header:{
        'content-type':'application/json',
      },
      success:(res)=>
      {
        console.log(res)
        this.setData({
          ganzhi:res.data.ganzhi,
          chinese:res.data.chinese.slice(5)
        })
      }
    })
  },
  goToAll:function(e){
    wx.setStorageSync('jie', e.currentTarget.dataset.value)
    wx.navigateTo({
      url: '/pages/all/all',
    })
  },
  goToDetail:function(e){
    let id=e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
        url: '/pages/detail/detail?id=' +id
    })
  }
})