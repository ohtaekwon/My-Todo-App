<template>
  <Background />
  <Headline />
  <Clock />
</template>

<script>
import Headline from '~/components/Headline.vue'
import Background from '~/components/Background.vue'
import Clock from '~/components/Clock.vue'

export default {
  components:{
    Background:Background,
    Headline:Headline,
    Clock:Clock,
  }
}
</script>