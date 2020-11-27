// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    img_url: [],
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    /**
     * 获取当前设备的宽高
     */
    wx.getSystemInfo( {

        success: function( res ) {
            that.setData( {
                winWidth: res.windowWidth,
                winHeight: res.windowHeight
            });
        }

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
   //  tab切换逻辑
  swichNav: function( e ) {

    var that = this;

    if( this.data.currentTab === e.target.dataset.current ) {
        return false;
    } else {
        that.setData( {
            currentTab: e.target.dataset.current
        })
    }
  },

  bindChange: function( e ) {

    var that = this;
    that.setData( { currentTab: e.detail.current });

  },
  selectImage:function(){
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        if (res.tempFilePaths.length>0){
          //图如果满了9张，不显示加图
          if (res.tempFilePaths.length == 9){
            that.setData({
              hideAdd:1
            })
          }else{
            that.setData({
              hideAdd: 0
            })
          }
          //把每次选择的图push进数组
          let img_url = that.data.img_url;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            img_url.push(res.tempFilePaths[i])
          }
          that.setData({
            img_url: img_url
          })
          console.log(img_url)
        }
      }
    })
  },
  input:function(e){
    this.setData({
     content:e.detail.value
    })
  },
  save:function(){
    
  },
  switchFont:function(){

  },
  internetBackg:function(){

  },
  nativeBackg:function(){

  },
  makeTap:function(){
    
  }

})