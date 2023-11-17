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
    headInterval: 8000,
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
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
    }
  },

  headBindChange({ detail }) {
    //第一张是视频 所以需要动态控制自动播放的时间
    this.setData({
      headInterval: detail.current == 0 ? 8000 : 2000,
    });
  },
  centerBindchange({ detail }) {
    //获取当前激活的swpier index
    this.setData({
      centerSwipterActiveIndex: detail.current,
      activeSwiperLable: homeData.info.infos[detail.current].label,
    });
  },
});
