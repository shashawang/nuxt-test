<template>
<!-- 一个目录下有多个动态组件只有第一个会被匹配到 -->
  <div class="user">
    <!-- <h3>{{ params.name }}</h3> -->
    <!-- <h3>{{ id }}</h3> -->
    <!-- <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p> -->
    <p>
      <NuxtLink to="/">
        user id page
      </NuxtLink>
    </p>
  </div>
</template>

<script>

export default {
  // validate ({ params }) { 
  //   return !isNaN(+params.id)
  // },
  scrollToTop: true,
  async asyncData ({ app, isClient, isServer, isStatic, isDev, isHMR, env, redirect, nuxtState, params, error, query, route, store,  }) {
    // console.log('params', params);
    // console.log('process', process);
    // console.log('process.client', process.client);
    // console.log('process.server', process.server);
    // console.log('process.static', process.static);
    // console.log('app, isClient, isServer, isStatic, isDev, isHMR, env, redirect, nuxtState, params, error, query, route, store', app, isClient, isServer, isStatic, isDev, isHMR, env, redirect, nuxtState, params, error, query, route, store);
      // return {id: 1}
    try {
      // const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return {id: 1}
    } catch (e) {
      console.log('e',e);
      // error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>