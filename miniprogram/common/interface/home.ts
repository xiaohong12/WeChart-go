export interface IHomeDataProps {
  db: IHomeDbProps[];
}
export interface IHomeDbProps {
  ads: {
    id: number;
    imageUrl: string;
    videoUrl: string;
    videoFirstImageUrl: string;
    maskImageUrl: string;
    sort: number;
    linkType: number;
    linkUrl: string;
    selfApp: boolean;
    appId: string;
    productId: number;
    activityId: string;
    categoryId: string;
    osMap: Object;
    productInMenu: string;
    isLinkWechatStatus: string;
  };
}
