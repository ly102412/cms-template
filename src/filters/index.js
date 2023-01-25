import dayjs from 'dayjs'

/**
 * 在 Vue3中取消了 过滤器的概念，其中：
 * 局部过滤器被完全删除
 * 全局过滤器虽然被移除，但是可以使用 全局属性 进行替代
 */

const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
