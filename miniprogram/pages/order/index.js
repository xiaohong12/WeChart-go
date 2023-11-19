import shopList from "../../api/order/shop-list"
Page({
data:{
  top:0,
  buttonInfo:{
    top:0,
    right:0
  },
  currentActiveType:1,
  shopList:[]
},
setActiveType(e){
  const type=e.target.dataset.type
  this.setData({
    currentActiveType:type,
  })
  },
  
onLoad(){
 const info= wx.getMenuButtonBoundingClientRect() //获取胶囊的top值
 console.log(info)
 this.setData({
  buttonInfo:info,
  shopList:shopList
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
