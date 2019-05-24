<template>
  <div>
    <my-header></my-header>
    <nuxt/>
  </div>
</template>
<script>
  import MyHeader from '../components/header'
  export default {
    components: {
      MyHeader
    }
  }
</script>

