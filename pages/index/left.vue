<template>
  <div class="container">
    <div>
      home index--left
    </div>
  </div>
</template>

<script>
export default {
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
