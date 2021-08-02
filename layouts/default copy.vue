<template>
  <div>
    <Nuxt name="top" />
    <header>
      <div class="left">logo</div>
      <!-- <div class="right">{{data}}</div> -->
    </header>
    <Nuxt />

    <!-- 中间件demo -->
    <Visits />

    <footer>footer</footer>
  </div>
</template>

<script>
import Visits from '~/components/Visits'

export default {
  components: { Visits },
  // layout 组件！！！！不能！！！调用 asyncData
  asyncData({ params, error }) {
    // console.log('params: ', params);
    return {data: 111111}
  },
}
</script>
<style>
header {
  display: flex;
  /* &.left {

<style>
header {
  display: flex;
  /* .left {
    width: 30%;
    background: yellow;
  }
  &.right {
    width: 70%;
    border: 1px solid red;
  } */
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
