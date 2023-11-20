import shopList from '../../api/order/shop-list';
import noticeList from '../../api/order/notice';
import bannerList from "../../api/order/banner"
import categories from "../../api/order/categories"


Page({
  data: {
    top: 0,
    btnInfo: {
      top: 0,
      right: 0,
    },
    currentActiveType: 1,
    shopList: [],
    currentSelectShopItem:{},
    noticeList:[],
    bannerList:[],
    windowInfo:{},
    visible:true,
    categoriesList:[]
  },
  setActiveType(e) {
    const type = e.target.dataset.type;
    this.setData({
      currentActiveType: type,
    });
  },

  onLoad() {
    const windowInfo = wx.getWindowInfo();
    const info = wx.getMenuButtonBoundingClientRect(); //获取胶囊的top值
    let _bannerList=bannerList.data.filter((item)=>{ 
      return item.position=="product"
    })
    this.setData({
      btnInfo: info,
      shopList: shopList,
      windowInfo,
      currentSelectShopItem:shopList.data[0],
      noticeList:noticeList.notice,
      bannerList:_bannerList,
      categoriesList:categories.categories
    });
  },
  setVisible(){
      this.setData({
          visible:!this.data.visible
      })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
  },
});
