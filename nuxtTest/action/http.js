// import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import { Loading } from 'element-ui';
const baseApi = 'http://localhost:3000'; // 默认域名地址
var filter = {
  post: 'data',
  get: 'params'
};
const request = (url, options, baseUrl, isLoading) => {
  return new Promise((resolve, reject) => {
    var innerUrl = 'http://localhost:3001';
    var api = url
    // if (baseUrl !== undefined || baseUrl !== '') {
    //   innerUrl = baseUrl
    // } else {
    //   innerUrl = baseApi
    // }
    let loadingInstance;
    if (isLoading) {
      loadingInstance = Loading.service({
        lock: true,
        text: '加载中...',
        // spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.1)'
      });
    }
    axios({
      url: innerUrl + api,
      method: options.method,
      [filter[options.method]]: options.data,
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(({data}) => {
      // console.log('第一次直接拿到的数据:', {data}) // code 要根据返回的data改
      if (isLoading) {
        setTimeout(()=>{
          loadingInstance.close();
        },500)
      }
      resolve(data)
    }).catch(err => { reject(err) })
  })
}

const get = (url, options = {}, baseUrl, isLoading = true) => {
  return request(url, {
    method: 'get',
    data: options
  }, baseUrl, isLoading)
}

const post = (url, options, baseUrl, isLoading = true) => {
  return request(url, {
    method: 'post',
    data: Qs.stringify(options)
  }, baseUrl, isLoading)
}

export default {
  get,
  post
}
