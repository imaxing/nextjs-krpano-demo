import request from '@/utils/request'

/**
 * app 包列表
 * @returns
 */
export const packages = () => {
  return request('/web/v1/package')
}
