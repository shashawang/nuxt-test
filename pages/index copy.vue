<template>
  <div class="container">
    <div>
      home page
    </div>
    <div>
      <nuxt-link to="/user">to user page</nuxt-link>
    </div>
    <div>
      <NuxtLink to="/"> to / </NuxtLink>
    </div>
    <div>
      <NuxtLink to="/about"> to about </NuxtLink>
    </div>
    <!-- 动态组件 -->
    <div>
      <li v-for="user in users" :key="user.id">
        <!-- <NuxtLink :to="'/user/'+user.name">
          {{ user.name }}
        </NuxtLink> -->
        <!-- <NuxtLink :to="'/user/'+(user.id==1?user.id:user.name)"> -->
        <!-- <NuxtLink :to="'/user/'+(user.id)"> -->
        <NuxtLink :to="'/user/'+(user.name)">
          {{ user.id }}
        </NuxtLink>
      </li>
    </div>
    <!-- 嵌套组件 -->
    <div>
      <nuxt-child />
    </div>
    <div>
      <!-- 命名视图 需要config里extendRoute配合 感觉这个设计很怪，为了引入子组件命名好直接引入就好了，还得配置 -->
      <nuxt-child name="left" /> 
      <!-- <nuxt-link to="/left" >to index left</nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
  // middleware: ['visits', 'user-agent'],
  async asyncData () {
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return {
      users: [
        {name: 'aa', id: 1},
        {name: 'bb', id: 2},
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
