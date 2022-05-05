<template>
  <div class="container">
    <div class="inputBox shadow">
      <input 
        type="text"
        v-model="newTodoItem"
        v-on:keyup.enter="addTodo"/>
      <span
        class="addContainer"
        v-on:click="addTodo">
        <i class="far fa-plus-square addBtn"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newTodoItem:''
    }
  },
  methods:{
    addTodo(){
      console.log(this.newTodoItem.value)
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput()
      this.$router.go()
    },
    clearInput(){
      this.newTodoItem=""
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container{
  padding-top:40px;
}

.inputBox {
  background: white;
  height: 60px;
  line-height: 50px;
  border-radius: 5px;
  input{
    border-style: none;
    font-size: 16px;
    background-size:cover;
    width:800px;
    height: 50px;
    &:focus{
     outline: none;
    }
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #62EAC6, #32CEE6);
    display: block;
    width: 5rem;
    height: 60px;
    border-radius: 0 5px 5px 0;
    text-align: center;
    top:0;
    bottom:0;
    left:0;
    right:0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
}

</style>