Component({
  data: {
    color: "#2a2a2a",
    selectedColor: "#93B5CF",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/icon/home0.png",
        selectedIconPath: "/icon/home1.png"
      },
      {
        pagePath: "/pages/search/search",
        text: "搜索",
        iconPath: "/icon/search0.png",
        selectedIconPath: "/icon/search1.png"
      },
      {
        pagePath: "/pages/add/add",
        bulge:true,
        iconPath: "/icon/add.png",
        selectedIconPath: "/icon/add.png"
      },
      {
        pagePath: "/pages/star/star",
        text: "星辰",
        iconPath: "/icon/star0.png",
        selectedIconPath: "/icon/star1.png"
      },
      {
        pagePath: "/pages/my/my",
        text: " 我的",
        iconPath: "/icon/my0.png",
        selectedIconPath: "/icon/my1.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})