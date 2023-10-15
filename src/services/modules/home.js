import { request } from '..'

export const getHomeGoodPriceData = () => {
  return request.request({
    method: 'get',
    url: '/api/home/goodprice',
  })
}
