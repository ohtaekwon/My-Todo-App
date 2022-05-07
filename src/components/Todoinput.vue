<template>
  <div class="container">
    <div class="add">
      <input 
        type="text"
        class="add__input"
        placeholder="Enter your task here"
        v-model="newTodoItem"
        v-on:keyup.enter="addTodoItem"/>
      <button 
        class="add__button"
        v-on:click="addTodoItem">
        <span class="blind">Add</span>
      </button>
    </div>
  </div>
</template>

<script>
import getDate from "~/js/getDate.js";

export default {
  data(){
    return {
      newTodoItem:""
    };
  },
  methods:{
    addTodoItem(){
      if (this.newTodoItem !== ""){
        const value = {
          // value값 객체데이터
          item: this.newTodoItem,
          date: `${getDate().date} ${getDate().week}`,
          time: getDate().time,
          completed:false // 완료여부
        }
        localStorage.setItem(this.newTodoItem, JSON.stringify(value))
        this.clearInput()
      }
    },
    clearInput(){
      this.newTodoItem=""
      // this.$router.go() // 새로 고침
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.container{
  padding-top:40px;
}
.add {
  position: relative;
  margin: 0 auto;
  text-align: center;
  
}
</style>

