<template>
  <div class="background">
    <img 
      :src="`https://github.com/ohtaekwon/MOMENTUM/blob/master/img/${chooseBackground()}?raw=true`" 
      alt="">
  </div>
  
</template>

<script>
export default {
  data() {
    return{
      backgrounds:[
        '01.jpg','02.jpg','03.jpg'
      ]
    }
  },
  methods:{
    chooseBackground(){
      return this.backgrounds[Math.floor(Math.random()*this.backgrounds.length)];
    }
  }
}
</script>

<style lang="scss" scoped>
.background{
  img{
  position:absolute;
  width:100%;
  height:100%;
  overflow: hidden;
  margin:0;
  background-size: cover; // 사진이 화면보다 클 때, 가로 세로 비율을 유지한 채로 작게 조정
  background-repeat: no-repeat;
  background-position: center;
  z-index:-9;
  filter: brightness(30%);
  }
}
</style>