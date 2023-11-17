import homeData from '../../api/home/index.js';
import { IHomeDbProps } from '../../common/interface/home.js';
let bannerList = [
  '今日邀好友「一起喝」可享免配送费',
  '今日邀好友「一起喝」可享免配送费',
  '今日邀好友「一起喝」可享免配送费今日邀好友「一起喝」可享免配送费',
];
Page({
  data: {
    swiperList: [],
    homeData: {},
    bannerList: [],
  },

  //页面加载是初始化数据
  onLoad() {
    this.setData({
      swiperList: homeData.ad.ads,
      homeData: homeData,
      bannerList: bannerList,
    });
  },
});
