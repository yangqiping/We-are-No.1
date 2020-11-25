// pages/search/search.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
      inpuVal: "",//input框内值
      listarr: [],//创建数组
      SearchText: '取消',//按钮变动值
      keydown_number: 0,//检测input框内是否有内容
      input_value: "",//value值
      hostarr: ["二十四节气","冬至吃些什么","关于春节的古诗"],//热门搜索接收请求存储数组  
      name_focus:true//获取焦点
    },
    inputvalue: function (e) {
      this.setData({
        inputVal: e.detail.value
      })
      if (e.detail.cursor != 0) {
        this.setData({
          SearchText: "搜索",
          keydown_number: 1
        })
      } else {
        this.setData({
          SearchText: "取消",
          keydown_number: 0
        })
      }
    },
    //搜索方法
    search: function () {
      if (this.data.keydown_number == 1) {
        let This = this;
        //把获取的input值插入数组里面
        let arr = this.data.listarr;
        console.log(this.data.inputVal)
        console.log(this.data.input_value)
        //判断取值是手动输入还是点击赋值
        if (this.data.input_value == ""){
          // console.log('进来第er个')
          // 判断数组中是否已存在
          let arrnum = arr.indexOf(this.data.inputVal);
          console.log(arr.indexOf(this.data.inputVal));
          if (arrnum != -1) {
            // 删除已存在后重新插入至数组
            arr.splice(arrnum,1)
            arr.unshift(this.data.inputVal);
          }else{
            arr.unshift(this.data.inputVal);
          }
        } else  {
          console.log('进来第一个')
          let arr_num = arr.indexOf(this.data.input_value);
          console.log(arr.indexOf(this.data.input_value));
          if (arr_num != -1) {
            arr.splice(arr_num, 1)
            arr.unshift(this.data.input_value);
          } else {
            arr.unshift(this.data.input_value);
          }
        }
        console.log(arr)
        //存储搜索记录
        wx.setStorage({
          key: "list_arr",
          data: arr
        })
        //取出搜索记录
        wx.getStorage({
          key: 'list_arr',
          success: function (res) {
            This.setData({
              listarr: res.data
            })
          }
        })
        this.setData({
          input_value: '',
        })
      } else {
        console.log("取消")
        wx.switchTab({
          url: '/pages/index/index',
        })
      }
    },
    //清除搜索记录
    delete_list: function () {
      //清除当前数据
      this.setData({
        listarr: []
      });
      //清除缓存数据
      wx.removeStorage({
        key: 'list_arr'
      })
    },
    //点击赋值到input框
    this_value:function(e){
      this.setData({
        name_focus: true
      })
      let value = e.currentTarget.dataset.text;
      this.setData({
        input_value:value,
        SearchText: "搜索",
        keydown_number: 1
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let This = this;
      //设置当前页标题
      wx.setNavigationBarTitle({
        title: '搜索'
      });
      //读取缓存历史搜索记录
      wx.getStorage({
        key: 'list_arr',
        success: function (res) {
          This.setData({
            listarr: res.data
          })
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
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
              selected: 1
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