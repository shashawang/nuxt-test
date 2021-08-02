<template>
  <div class="user">
    <!-- <h3>{{ params.name }}</h3> -->
    <!-- <h3>{{ id }}</h3> -->
    <!-- <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p> -->
    <p>
      <NuxtLink to="/">
        user name page
      </NuxtLink>
    </p>
  </div>
</template>

<script>

export default {
  // validate ({ params }) {
  //   return !isNaN(+params.id)
  // },
  async asyncData ({ params, error }) {
    // console.log('params', params);
    try {
      // const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      // return {id: params.id}
      return {id: 1}
    } catch (e) {
      console.log('e',e);
      // error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>