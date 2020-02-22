import request from '@/utils/request'

// 测试接口(使用www.baidu.com域名)
export function testBaiDu(data) {
  return request({
    url: 'http://www.baidu.com/test',
    method: 'get',
    params: data
  })
}
