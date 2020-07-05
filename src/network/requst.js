import axios from 'axios'

export function request(config){
  //创建实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3',
    // baseURL:'/api',
    timeout:5000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => err)

  //响应拦截
  instance.interceptors.response.use(datas => {
    if(datas.data.success){
      return datas.data.data
    }else{
      return datas.data
    }
  },error => error)

  //发送请求
  return instance(config)
}