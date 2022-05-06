<template>
  <div class="container">
    <ul class="list">
      <li 
        class="list__item"
        v-for="todoItem in todoItems"
        v-bind:key="todoItem.item">
        <input 
          type="checkbox"
          v-bind:id="todoItem.item"
          v-bind:checked="todoItem.completed === true"
          v-on:change="toggleComplete(todoItem)"/>
        <label
          v-bind:for="todoItem.item" 
          class="list__label">
            <p class="list__text">{{ todoItem.item }}</p>  
        </label>
        <button 
          class="list__delete" 
          v-on:click="removeTodo(todoItem, index)">
          <div class="blind">Delete</div>
        </button>
        <p class="list__date">{{ todoItem.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props:["propsdata"],
  data(){
    return{
      todoItems:[]
    }
  },
  created(){
    if (localStorage.length>0){
      for (let i=0; i<localStorage.length; i++){
        // console.log(localStorage.key())
        // localStoarge.key(인덱스번호)
        if (localStorage.key(i) !== "loglevel:webpack-dev-server"){
          this.todoItems.push(
            // localStorage.getItem(localStorage.key(i))
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          )
        }
      }
    }
  },

  methods:{
    toggleComplete(todoItem){
      todoItem.completed = !todoItem.completed
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    }

  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.container{
  padding-top:40px;
}
.list{
  position: relative;
  margin:2.1rem auto 0;
  z-index:9;
}
</style>