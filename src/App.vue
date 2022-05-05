<template>
  <Header />
  <RouterView />
</template>


<script>
import Header from '~/components/Header.vue'

export default {
  components:{
    Header:Header
  }
}

</script>
<style lang="scss">
@import "~/scss/main.scss";
</style>