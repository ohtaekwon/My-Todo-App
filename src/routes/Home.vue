<template>
  <Background />
  <Headline />
  <Clock />
  <Login />
  <Todoinput />
  <TodoList />
</template>

<script>
import Headline from '~/components/Headline.vue'
import Background from '~/components/Background.vue'
import Clock from '~/components/Clock.vue'
import Login from '~/components/Login.vue'
import Todoinput from '~/components/Todoinput.vue'
import TodoList from '~/components/TodoList.vue'

export default {
  components:{
    Background:Background,
    Headline:Headline,
    Clock:Clock,
    Login:Login,
    Todoinput:Todoinput,
    TodoList:TodoList
  },
}
</script>
