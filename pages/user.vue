<template>
  <div class="container">
    <div>
      user page
    </div>
    <li v-for="user in users" :key="user.id">
        <NuxtLink :to="'/user/'+user.name">
          {{ user.name }}
        </NuxtLink>
        <!-- <NuxtLink :to="'/user/'+(user.id==1?user.id:user.name)"> -->
        <!-- <NuxtLink :to="'/user/'+(user.id)"> -->
      </li>
    <nuxt-child :foobar="123" />
  </div>
</template>

<script>
export default {
  // Key for <NuxtChild> (transitions)
  key: to => to.fullPath,
  // Called to know which transition to apply
  transition (to, from) {
    if (!from) { return 'slide-left' }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
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
