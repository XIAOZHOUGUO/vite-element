<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
import { ElDatePicker, ElButton } from 'element-plus'

defineProps<{
  msg: string
}>()

const count = ref(0)

const state = reactive({
  disabledDate(time: Date) {
    return time.getTime() > Date.now()
  },
  shortcuts: [
    {
      text: '今天',
      value: new Date(),
    },
    {
      text: '昨天',
      value: () => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        return date
      },
    },
    {
      text: '一周前',
      value: () => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        return date
      },
    },
  ],
  value: '',
})

const { disabledDate, shortcuts, value } = {
  ...toRefs(state),
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    Recommended IDE setup:<a
      href="https://code.visualstudio.com/"
      target="_blank"
      >VSCode</a
    >+<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
  <p>See<code>README.md</code>for more information.</p>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Docs</a
    >|<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs </a>
  </p>
  <el-button type="primary" @click="count++" style="margin-right: 1rem;">
    count is: {{ count }}
  </el-button>
  <el-date-picker
    v-model="value"
    type="date"
    placeholder="选择日期"
    :disabled-date="disabledDate"
    :shortcuts="shortcuts"
  >
  </el-date-picker>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style scoped>
* {
  font-size: 1.4rem;
}

h1 {
  font-size: 34px;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  color: #304455;
  background-color: #eee;
  border-radius: 4px;
}
</style>
