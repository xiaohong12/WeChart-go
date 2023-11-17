import homeData from '../../api/home/index.js';
import { IHomeDbProps } from '../../common/interface/home.js';
let bannerList = [
  '今日邀好友「一起喝」可享免配送费',
  '今日邀好友「一起喝」可享免配送费',
];
Page({
  data: {
    swiperList: [],
    homeData: {},
    bannerList: [],
    centerSwipterActiveIndex: 0,
    activeSwiperLable: '',
  },

  //页面加载是初始化数据
  onLoad() {
    //获取窗口信息
    const windowInfo = wx.getWindowInfo();
    this.setData({
      swiperList: homeData.ad.ads,
      homeData: homeData,
      bannerList: bannerList,
      windowInfo,
      activeSwiperLable: homeData.info.infos[0]?.label,
    });
  },
  bindchange({ detail }) {
    //获取当前激活的swpier index
    console.log(detail)
    this.setData({
      centerSwipterActiveIndex: detail.current,
      activeSwiperLable: homeData.info.infos[detail.current].label,
    });
  },
});
