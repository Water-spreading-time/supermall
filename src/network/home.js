import {request} from './requst'

export function getHomeData(){
  return request({url:'/home/multidata'})
}