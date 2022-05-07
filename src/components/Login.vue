<template>
  <div class="container">
    <form 
      :class="{hidden}"
      id="login-Form">
      <input 
        required maxlength="11" 
        type="text" 
        placeholder="What is your name?"
        class="inputname"
        v-model="username"
        v-on:keyup.enter="onLoginSubmit"/>
      <input 
        type="submit" 
        value="Log In" 
        class="loginbtn"
        v-on:click="onLoginSubmit"/>
    </form>
    
    <h1
      :class="{hidden:!hidden}"
      id="greeting">
      Hello {{ username }}
    </h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      hidden:false,
      localName:''
   }
  },
  created(){
    console.log(this.username)
    console.log(localStorage.username)
    if (localStorage.username!==null){
      this.username = localStorage.username
      // this.hidden=
    }
  },
  methods:{
    onLoginSubmit(info){
      if (this.username!=""){
        const loginFormEl=document.querySelector('#login-Form')
        const loginInput = loginFormEl.querySelector('input')
        // const greeting = document.querySelector('#greeting')
        const HIDDEN_CLASSNAME = 'hidden'
        const USERNAME_KEY = 'username'
        info.preventDefault()
        const username = loginInput.value

        // localStorage
        localStorage.setItem(USERNAME_KEY,this.username)
        this.hidden=!this.hidden
      }
    },

  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container{
  padding-top:300px; // 내부 위쪽 여백 40px
}
.hidden{
  display: none;
}
#login-Form {
  text-align: center;
  margin-top:0px;
  padding-top: 20px;

  input{
    text-align: center;
    color:$primary;
    font-size:2rem;
    width: 540px;
    height:40px;
    background-color: rgba(255,255,255,0.1);
    font-weight: 500;
    border:none;
    margin-bottom:20px;
    margin-top:-50px;
    transition: all, 0.4s;
    &:hover::-webkit-input-placeholder{
      color: rgb(50, 50, 50);
    }
    ::placeholder{
      font-family: 'Oswald', sans-serif;
      color:$primary;
    }
    &:first-child{
      text-align: center;
      color:white;
      font-size:1.3rem;
      padding: 10px;
      width: 240px;
      background-color: rgba(255,255,255,0.2);
      border:none;
      transition: all, 0.4s;
      &:hover{
        background-color: rgba(255,255,255,0.4);

      }
    }
  }
  .loginbtn{
    display: none;
  }
}


#greeting{
  margin: 0 auto;
  text-align: center;
  color:$gray-200;
  font-family: 'Oswald', sans-serif;
  font-size:3rem;
  line-height: 1;// 줄 높이
 

}
</style>