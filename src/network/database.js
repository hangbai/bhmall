import {request} from "@/network/request";

export function getHomeData(){
  return request({
    url:'/home/multidata'
  })
}

export function getDetailData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getMaitKey(maitKey){
  return request({
    url:'/subcategory',
    params: {
      maitKey
    }
  })
}

export function getMiniWallkey(miniWallkey,type){
  return request({
    url:'/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}