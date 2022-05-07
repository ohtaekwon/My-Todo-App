<template>
  <Background />
  <Headline />
  <Clock />
  <Login />
  <div id="todo">
    <Todoinput />
    <TodoList />
  </div>
</template>

<script>
import Headline from '~/components/Headline.vue'
import Background from '~/components/Background.vue'
import Clock from '~/components/Clock.vue'
import Login from '~/components/Login.vue'
import Todoinput from '~/components/Todoinput.vue'
import TodoList from '~/components/TodoList.vue'
// import TodoController from '~/components/TodoController.vue'

export default {
  components:{
    Background:Background,
    Headline:Headline,
    Clock:Clock,
    Login:Login,
    Todoinput:Todoinput,
    // TodoController:TodoController,
    TodoList:TodoList,

  },
}
</script>
