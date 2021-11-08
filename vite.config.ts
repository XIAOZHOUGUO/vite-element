import { resolve } from 'path'
import { vite2Ext } from 'apite'
import vue from '@vitejs/plugin-vue'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import VitePluginElementPlus from 'vite-plugin-element-plus'
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  // eg: import.meta.env.VITE_BASE_URL -> process.env.VITE_BASE_URL
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src'),
        },
      ],
    },
    plugins: [
      vue(),
      // 按需加载样式 https://github.com/element-plus/vite-plugin-element-plus
      VitePluginElementPlus({
        format: mode === 'development' ? 'esm' : 'cjs',
      }),
      // @ts-ignore
      vite2Ext({
        dir: 'mock',
        docTitle: 'Apite 接口开发文档',
        // 公共返回格式定义,可以根据实际返回不使用这里的公共返回格式
        resp: {
          // @ts-ignore
          code: ['code', 200], // 成功字段，默认返回码 0
          fail: ['fail', 400], // 失败信息，默认返回码 400
          msg: ['msg', 'ok'], // 信息字段，默认值 ok
          // @ts-ignore
          result: ['data'], // 结果字段, 默认 result
          total: ['total', 0], // 列表总数字段，默认值 0
        },
      }),
    ],
  }
})
