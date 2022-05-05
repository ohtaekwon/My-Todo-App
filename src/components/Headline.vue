<template>
  <div class="container">
    <h1>
      <span>My ToDo APP</span><br/>
      EveryDay 
      ToDo List <br />
    </h1>
    <p>
      이름을 작성하고, 매일 매일 해야할 일들을 작성하고, 계획을 실천해보세요
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main.scss";
.container{
  padding-top:40px; // 내부 위쪽 여백 40px
}
h1{
  line-height: 1;// 줄 높이
  font-family: 'Oswald', sans-serif;
  font-size:80px;
  color:$gray-200;
  span{
    color:$primary;
  }
}
p{
  margin:30px;
  color:$gray-100;
  font-size:20px;
}
</style>