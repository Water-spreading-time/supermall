import {request} from './requst'

export function getHomeData(){
  return request({url:'/home/multidata'})
}

export function getHomeList(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}