import {request} from './requst'

export function getHomeData(){
  return request({url:'/home/multidata'})
}

export function getHomeList(){
  return request({url:'/home/data'})
}