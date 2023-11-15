Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#333333',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: '../image/tabBar/unselect_home.png',
        selectedIconPath: '../image/tabBar/select_home.png',
        text: '首页',
      },
      {
        pagePath: 'pages/order/index',
        iconPath: '../image/tabBar/unselect_naicha.png',
        selectedIconPath: '../image/tabBar/select_nacha.png',
        text: '点单',
      },
      {
        pagePath: 'pages/baihuo/index',
        iconPath: '../image/tabBar/unselect_shop.png',
        selectedIconPath: '../image/tabBar/select_shop.png',
        text: '百货',
      },
      {
        pagePath: 'pages/shop/index',
        iconPath: '../image/tabBar/unselect_dingdan.png',
        selectedIconPath: '../image/tabBar/select_dingdan.png',
        text: '订单',
      },
      {
        pagePath: 'pages/person/index',
        iconPath: '../image/tabBar/unselect_xi.png',
        selectedIconPath: '../image/tabBar/select_xi.png',
        text: '喜嘉宾',
      },
    ],
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        selected: data.index,
      });
    },
  },
});
