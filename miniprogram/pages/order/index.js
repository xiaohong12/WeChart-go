import shopList from '../../api/order/shop-list';
import noticeList from '../../api/order/notice';
import bannerList from '../../api/order/banner';
import categories from '../../api/order/categories';

Page({
  data: {
    top: 0,
    btnInfo: {
      top: 0,
      right: 0,
    },
    currentActiveType: 1,
    shopList: [],
    currentSelectShopItem: {},
    noticeList: [],
    bannerList: [],
    windowInfo: {},
    visible: true,
    categoriesList: [],
    currentActiveCategories: null,
    productMenue: 100,
    animationData: null,
    bannerAnimationData: null,
  },
  setActiveType(e) {
    const type = e.target.dataset.type;
    this.setData({
      currentActiveType: type,
    });
  },
  setActiveCategoryies(e) {
    const id = e.target.dataset.id;
    this.setData({
      currentActiveCategories: id,
    });
  },
  onLoad() {
    const windowInfo = wx.getWindowInfo();
    const info = wx.getMenuButtonBoundingClientRect(); //获取胶囊的top值
    let _bannerList = bannerList.data.filter((item) => {
      return item.position == 'product';
    });

    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 0,
    });

    // 设置菜单box动画的初始状态
    animation.opacity(1).step();
    var bannerAnimation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease-in',
      delay: 0,
    });

    // 设置banner动画的初始状态
    bannerAnimation.opacity(1).step();

    this.setData({
      btnInfo: info,
      currentActiveCategories: categories.categories[0].id,
      shopList: shopList,
      windowInfo,
      currentSelectShopItem: shopList.data[0],
      noticeList: noticeList.notice,
      bannerList: _bannerList,
      categoriesList: categories.categories,
      animationData: animation.export(),
      bannerAnimationData: bannerAnimation.export(),
    });
    this.setProductMenueHeight();
  },

  scollerTopAction(e) {
    if (this.data.currentActiveCategories == this.data.categoriesList[0].id) {
      var bannerAnimation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease-in',
        delay: 0,
      });
      bannerAnimation.opacity(1).step();
      this.setData(
        {
          visible: true,
          bannerAnimationData: bannerAnimation.export(),
        },
        () => {
          this.setProductMenueHeight();
        }
      );
    }
  },

  setVisible() {
    this.setData({
      visible: !this.data.visible,
    });
  },
  leftSwiperScollerAction(e) {
    if (e.detail.scrollTop > 10) {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear',
        delay: 0,
      });
      // 设置动画效果为透明度为 1
      animation.translateY(-5).step();
      // 导出动画数据传递给组件的 animation 属性
      this.setData({
        animationData: animation.export(),
      });

      var bannerAnimation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease-out',
        delay: 0,
      });
      bannerAnimation.translateY(-20).opacity(0).step();
      this.setData(
        {
          bannerAnimationData: bannerAnimation,
        },
        () => {
          this.setData(
            {
              visible: false,
            },
            () => {
              this.setProductMenueHeight();
            }
          );
        }
      );
    }
  },
  setProductMenueHeight() {
    const windowInfo = wx.getWindowInfo();
    let query = wx.createSelectorQuery().in(this);
    // 选择器的语法与jQuery语法相同
    query.select('#productCardBox').boundingClientRect();
    query.exec((res) => {
      let top = res[0].top;
      this.setData({
        productMenue: windowInfo.windowHeight - top,
      });
    });
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
  },
});
