<template>
  <view class="container">
    <layout></layout>
  </view>
</template>

<script>
import Layout from './src/layout/Layout'
export default {
  components: {
    Layout
  }
}
</script>
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
