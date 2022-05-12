<template>
  <section class="youtube">
    <div class="youtube__area">
    <iframe
      :width="width"
      :height="height"
      :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1 `"
      title="YouTube video player"
      frameborder="0"
      allow="
        accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture
        loop;"
        
      allowfullscreen
    ></iframe>
     </div>
    <div class="youtube__cover"></div>
  </section>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 720,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>

.youtube{
  width:100%;
  height:720px;
  overflow: hidden;
  margin:0 a;
  background-size: cover; // 사진이 화면보다 클 때, 가로 세로 비율을 유지한 채로 작게 조정
  background-repeat: no-repeat;
  background-position: center;
  z-index:-9;
  filter: brightness(90%);
  .youtube__cover{
  background-color: rgba(0,0,0,.3);
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
}

}
</style>