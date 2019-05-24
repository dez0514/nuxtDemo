import axios from 'axios';

export const articlelist = () => {
  return axios.get('/api/article').then(res => {
    return res.data
  }).catch((e) => {
    error({statusCode:404,message:'sth not found'})
  })
}