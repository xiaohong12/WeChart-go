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
    categoriesList:[],
    currentActiveCategories:null,
    productMenue:100,
    animationData:null
  },
  setActiveType(e) {
    const type = e.target.dataset.type;
    this.setData({
      currentActiveType: type,
    });
  },
  setActiveCategoryies(e){
    const id = e.target.dataset.id;
    this.setData({
      currentActiveCategories:id
    })
  },
  onLoad() {
    const windowInfo = wx.getWindowInfo();
    const info = wx.getMenuButtonBoundingClientRect(); //获取胶囊的top值
    let _bannerList=bannerList.data.filter((item)=>{ 
      return item.position=="product"
    })
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 0,
    });
    
    // 设置动画的初始状态
    animation.opacity(1).step();
    this.setData({
      btnInfo: info,
      shopList: shopList,
      windowInfo,
      currentSelectShopItem:shopList.data[0],
      noticeList:noticeList.notice,
      bannerList:_bannerList,
      categoriesList:categories.categories,
      animationData: animation.export(),
    });
    
    let query = wx.createSelectorQuery().in(this);
    // 然后逐个取出navbar和header的节点信息
    // 选择器的语法与jQuery语法相同
    query.select('#xxx').boundingClientRect();
    query.exec((res) => {
      // 分别取出navbar和header的高度
      let top = res[0].top;
      this.setData({
        productMenue:windowInfo.windowHeight-top
      })
  });
  },
  onShow(){
  

  },
  scollerTopAction(e){
    this.setData({
      visible:true
    },()=>{
      const windowInfo = wx.getWindowInfo();
    let query = wx.createSelectorQuery().in(this);
    // 然后逐个取出navbar和header的节点信息
    // 选择器的语法与jQuery语法相同
    query.select('#xxx').boundingClientRect();
    query.exec((res) => {
      // 分别取出navbar和header的高度
      let top = res[0].top;
      this.setData({
        productMenue:windowInfo.windowHeight-top
      })
   });
    })
  },

  setVisible(){
      this.setData({
          visible:!this.data.visible
      })
  },
  leftSwiperScollerAction(e){
    
    if(e.target.offsetTop>100){
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear',
        delay: 0,
      });
      // 设置动画效果为透明度为 1
      animation.opacity(0).step();
      // 导出动画数据传递给组件的 animation 属性
      this.setData({
        animationData: animation.export(),
      });
      this.setData({
        visible:false
      },()=>{
        const windowInfo = wx.getWindowInfo();
      let query = wx.createSelectorQuery().in(this);
      // 然后逐个取出navbar和header的节点信息
      // 选择器的语法与jQuery语法相同
      query.select('#xxx').boundingClientRect();
      query.exec((res) => {
        // 分别取出navbar和header的高度
        let top = res[0].top;
        this.setData({
          productMenue:windowInfo.windowHeight-top
        })
    });
      })
      
    }else{
      console.log(11)
      this.setData({
        visible:true
      })
    }
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
  },
});
