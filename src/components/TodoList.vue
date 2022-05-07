<template>
  <div class="container">
    <ul 
      class="list">
      <li 
        class="list__item"
        v-for="(todoItem,index) in todoItems"
        v-bind:key="todoItem.item">
        <input 
          type="checkbox"
          v-bind:id="todoItem.item"
          v-bind:checked="todoItem.completed === true"
          v-on:change="toggleComplete(todoItem)"
          class="checkbox"/>
        <label
          v-bind:for="todoItem.item" 
          class="list__label">
          <p class="list__text">{{ todoItem.item }}</p>  
        </label>
          <p class="list__date">{{ todoItem.date }}</p>
        <button 
          class="list__delete" 
          v-on:click="removeTodo(todoItem, index)">
          <div class="blind"><i class="fa fa-trash"></i></div>
        </button>
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
      for (var i=0; i<localStorage.length; i++){
        console.log(localStorage.key(i))
        // localStoarge.key(인덱스번호)
        // if (localStorage.key(i) !== "loglevel:webpack-dev-server"){
        if (localStorage.key(i)==='username'){
          continue
        }
        else{
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

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: rgba(255,255,255,0.1);
  justify-content: center;
  left:0;
  right:0;
  top:0;
  bottom:0;
  .checkbox{
    display: inline-block;

    justify-content: center;
    align-items:center;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border: 2px solid #bcbcbc;
    cursor: pointer;
  }
  
  label{
    display: inline-block;
    margin-left:50px;
    margin-right:100px;
    font-family: 'Oswald', sans-serif;
    color:$primary;
    font-size:50px;
  }
  p{
    font-family: 'Oswald', sans-serif;
    color:$primary;
    font-size:30px;
  }
  .list__delete{
    margin-right:auto;
    border:none;
    font-size:30px;
    color:$red;
    background:none;
    cursor: pointer;
  }
  
}
</style>