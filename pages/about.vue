<template>
  <div class="container">
    <h1>About page</h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  transition: 'bounce',
  layout: 'hasLeft', // 定义的布局文件如果不存在，会使用默认布局文件，没报错貌似;影响了动画效果
  validate({ params, store }) { // 非动态路由可以校验，但结果只是让页面正常显示或者显示错误页面，非动态路由用处不大
    // 校验 `params.id` 是否存在
    // return store.state.visits.some(visit => visit.path.includes('user'))
    return true
  },
  asyncData({ params, error }) {
    // return axios
    //   .get(`https://my-api/posts/${params.id}`)
    //   .then(res => {
    //     return { title: res.data.title }
    //   })
    //   .catch(e => {
    //     error({ statusCode: 666, message: 'Post not found' })
    //     })
  },
}
</script>