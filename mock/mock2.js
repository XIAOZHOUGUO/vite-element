/**
 * @sort 2
 * @name 模块2示例
 * 接口描述信息，支持html标签
 * 更多 mock 语法请参考 <a href="http://mockjs.com/examples.html" target="_blank">mockjs</a>
 * 更多 Apite 语法及使用方式请参考 <a href='https://github.com/wangxing218/apite/blob/main/web-src/api/index.js' target='_blank'> 例子 </a>
 */
const { api, mock, resp } = require('apite')

/**
 * @name 获取用户详情数据
 * 点击在线调试传参数请求看看
 * @param {number} id 用户id
 */
api.get('/user/{id}', ctx => {
  return {
    status: 200,
    rel: true,
    data: mock({
      id: ctx.params.id,
      name: '@name',
      cname: '@cname',
      date: '@dateTime',
      age: '@integer(1,100)',
      address: '@county(true)',
      reg: /\w{10}/,
    }),
  }
})

/**
 * @name 统一返回成功
 * resp.ok(data, ext) 返回成功
 * resp.fail(msg, code, ext) 返回失败
 * resp.mock(data, ext) 返回成功并mock
 * resp.list(list, total, ext) 返回列表
 * 返回格式可按要求在 config 里定制
 */
api.get('/resp/ok', resp.ok('添加成功', { rel: true }))

/**
 * @name 统一返回失败
 * resp.ok(data, ext) 返回成功
 * resp.fail(msg, code, ext) 返回失败
 * resp.mock(data, ext) 返回成功并mock
 * resp.list(list, total, ext) 返回列表
 * 返回格式可按要求在 config 里定制
 */
api.get('/resp/fail', resp.fail('失败了', 400, { rel: false }))

/**
 * @name 统一返回mock
 * resp.ok(data, ext) 返回成功
 * resp.fail(msg, code, ext) 返回失败
 * resp.mock(data, ext) 返回成功并mock
 * resp.list(list, total, ext) 返回列表
 * 返回格式可按要求在 config 里定制
 */
api.get('/resp/mock', () =>
  resp.mock(
    {
      'list|10': [
        {
          id: '@id',
          name: '@cname',
          title: '@title',
          email: '@email',
        },
      ],
      'total|90-1000': 10,
    },
    { rel: true }
  )
)

/**
 * @name 统一返回列表
 * resp.ok(data, ext) 返回成功
 * resp.fail(msg, code, ext) 返回失败
 * resp.mock(data, ext) 返回成功并mock
 * resp.list(list, total, ext) 返回列表
 * 返回格式可按要求在 config 里定制
 */
api.get('/resp/list', ctx => {
  const data = mock({
    'list|10': [
      {
        id: '@id',
        name: '@cname',
        title: '@title',
        email: '@email',
      },
    ],
  })
  ctx.body = resp.list(data.list, 98, { rel: true })
})
