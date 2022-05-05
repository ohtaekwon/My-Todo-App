<template>
  <div class="container">
    <form class='hidden' id="login-Form">
      <input 
        required maxlength="11" 
        type="text" 
        placeholder="What is your name?"/>
      <input 
        type="submit" 
        value="Log In" />
    </form>
  <!-- <h1 class='hidden' id="greeting"></h1> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:''
    }
  },
  methods:{
    onLoginSubmit(info){
      const loginFormEl=document.querySelector('#login-Form')
      const loginInput = loginFormEl.querySelector('input')
      const greeting = document.querySelector('#greeting')
      const HIDDEN_CLASSNAME = 'hidden'
      const USERNAME_KEY = 'username'
      // 새로 고침을 막음
      // 1) 브라우저의 기본 동작을 막음
      info.preventDefault()
      // 2) form을 다시 숨겨준다.
      loginFormEl.classList.add(HIDDEN_CLASSNAME)
      // 3) loginInput.value를 username이라는 변수에 저장한다.
      const username = loginInput.value

      // localStorage
      // 4) username 값을 username 이라는 key와 함께 local stroage에 저장한다.
      localStorage.setItem(USERNAME_KEY,username)
      // 5) paintGeetings 함수를 호출한다.
      // paintGeetings 는 하나의 인자를 받고 있다.
      paintGreetings(username)
    },
    paintGreetings(username){
      greeting.innerText = `Hello ${username}`
      greeting.classList.remove(HIDDEN_CLASSNAME)  
    }

  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.container{
  padding-top:400px; // 내부 위쪽 여백 40px
}
// h1{
//   line-height: 1;// 줄 높이
//   font-family: 'Oswald', sans-serif;
//   font-size:80px;
//   color:$gray-200;
//   span{
//     color:$primary;
//   }
// }
</style>