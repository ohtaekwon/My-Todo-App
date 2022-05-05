<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          v-bind:to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components:{
    Logo:Logo
  },
  data(){
    return{
      navigations:[
        {
          name:'Todo',
          href:'/'
        },
        {
          name:'Plan',
          href:'/Plan'
        },
        {
          name:'About',
          href:'/about'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
header{
  font-size:20px;
  height:70px;
  padding : 0 40px;
  display: flex;
  align-items: center;
  .logo{
    margin-right:40px;
  }
}

</style>