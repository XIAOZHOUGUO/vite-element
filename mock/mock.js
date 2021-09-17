// https://github.com/wangxing218/apite
/**
 * @sort 1
 * @name 接口示例
 * 接口描述信息，支持html标签
 * 更多 mock 语法请参考 <a href="http://mockjs.com/examples.html" target="_blank">mockjs</a>
 */
const { api, delay, mock } = require('apite')

/**
 * @name 模拟mock数据
 * 点击在线调试传参数请求看看
 * @param {string} name 名称
 * @param {number} [age=10] 年龄
 * @param {boolean} [online=true] 是否在线
 */
api.post('/getTest', ctx => {
  return {
    status: 200,
    rel: true,
    data: mock({
      id: '@id',
      'number|1-100': 100,
      name: '@name',
      cname: '@cname',
      date: '@dateTime',
      reg: /\w{10}/,
    }),
  }
})

/**
 * @name 模拟表格数据
 * 点击在线调试传参数请求看看
 * @param {number} page 页码
 * @param {number} size 每页条数
 */
api.get('/list', async ctx => {
  const { size } = ctx.query
  await delay(1000, 2000)
  return {
    status: 200,
    rel: true,
    data: mock({
      [`list|${size}`]: [
        {
          id: '@id',
          name: '@name',
          age: '@integer(1,100)',
          cname: '@cname',
          address: '@county(true)',
          email: '@email',
        },
      ],
      'total|90-1000': 10,
    }),
  }
})
