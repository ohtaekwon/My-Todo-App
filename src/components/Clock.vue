<template>
  <div class="container">
    <div class="clock">
      <div class="digit hours">
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
      </div>
      <div class="digit hours">
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
      </div>
          <div class="intervalPoint">
            <div class="separator"></div>
            <div class="separator"></div>
          </div>
      <div class="digit minutes">
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
      </div>
      <div class="digit minutes">
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
      </div>
      <div class="intervalPoint">
            <div class="separator"></div>
            <div class="separator"></div>
          </div>
      <div class="digit seconds">
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
      </div>
      <div class="digit seconds">
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
        <div class="segment"></div>
      </div>
          <div class="systemTime-main">
            <p class="systemTime-title">    </p>
            <!-- <p style="color: #00DCFF; font-size: 30px; line-height: 40px; font-family: fantasy;">2019/12/05</p> -->
            <div class="systemTime-date">
              <div class="date-numble year">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="date-numble year">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="date-numble year">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="date-numble year">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="date-numble month">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="date-numble month">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="date-numble day">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
              <div class="date-numble day">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        digitSegments : [
          [1,2,3,4,5,6],
          [2,3],
          [1,2,7,5,4],
          [1,2,7,3,4],
          [6,7,2,3],
          [1,6,7,3,4],
          [1,6,5,4,3,7],
          [1,2,3], 
          [1,2,3,4,5,6,7],
          [1,2,7,3,6]
        ]
      };
    },
    mounted() {
      var _that = this
      var _hours = document.querySelectorAll('.hours');
      var _minutes = document.querySelectorAll('.minutes');
      var _seconds = document.querySelectorAll('.seconds');
      var _year = document.querySelectorAll('.year');
      var _month = document.querySelectorAll('.month');
      var _day = document.querySelectorAll('.day');
      var date = new Date();
      var years = date.getFullYear(), months = date.getMonth()+1, days = date.getDate(); 
      _that.setNumber(_year[0], Math.floor(years/1000));
      _that.setNumber(_year[1], Math.floor(years/100)%10);
      _that.setNumber(_year[2], Math.floor(years/10)%10);
      _that.setNumber(_year[3], years%10);
      _that.setNumber(_month[0], Math.floor(months/10));
      _that.setNumber(_month[1], months%10);
      _that.setNumber(_day[0], Math.floor(days/10));
      _that.setNumber(_day[1], days%10);
      setInterval(function() {
        var date = new Date();
        var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds(); 
        _that.setNumber(_hours[0], Math.floor(hours/10));
        _that.setNumber(_hours[1], hours%10);
        _that.setNumber(_minutes[0], Math.floor(minutes/10));
        _that.setNumber(_minutes[1], minutes%10);
        _that.setNumber(_seconds[0], Math.floor(seconds/10));
        _that.setNumber(_seconds[1], seconds%10);
      }, 1000);      
    },
    methods: {
      //digit     、number        
      setNumber(digit, number) {
        var _that = this
        var segments = digit.querySelectorAll('.segment');
        var current = parseInt(digit.getAttribute('data-value'));
        // only switch if number has changed or wasn t set
        if (!isNaN(current) && current != number) {
          // unset previous number
          _that.digitSegments[current].forEach(function(digitSegment, index) {
            setTimeout(function() {
              segments[digitSegment-1].classList.remove('on');
            }, index*45)
          });
        }
        if (isNaN(current) || current != number) {
          // set new number after
          setTimeout(function() {
            _that.digitSegments[number].forEach(function(digitSegment, index) {
              setTimeout(function() {
                segments[digitSegment-1].classList.add('on');
              }, index*45)
            });
          }, 250);
          digit.setAttribute('data-value', number);
        }
      }
    },
    watch: {}
 }
</script>
<style lang='scss' scoped>
@import "~/scss/main.scss";

.clock {
  height:150px * 14/8;
  // background:$gray-900;
  position:absolute;
  // top:50%;
  flex-shrink: 1;
  // left:25%;
  
  // width:900px;
  // margin-left:-450px;
  // margin-top:-100px;
  text-align:center;
  .intervalPoint{
    display: inline-block;
    height: 100px;
    .separator {
      width:20px;
      height:20px;
      background:#00DCFF;
      border-radius:50%;
      display:block;
      position:relative;
      margin-bottom: 20px;
    }
  }
  .digit {
    $width:150px;
    width:$width;
    height:$width * 14/8;
    margin:0 0px;
    position:relative;
    display:inline-block;
    .segment {
      background:#00DCFF;
      border-radius:5px;
      position:absolute;
      opacity:0.15;
      transition:opacity 0.2s;
      -webkit-transition:opacity 0.2s;
      -ms-transition:opacity 0.2s;
      -moz-transition:opacity 0.2s;
      -o-transition:opacity 0.2s;
    }
    .segment.on, .separator {
      opacity:1;
      // box-shadow:0 0 50px rgba(255,0,0,0.7);
      transition:opacity 0s;
      -webkit-transition:opacity 0s;
      -ms-transition:opacity 0s;
      -moz-transition:opacity 0s;
      -o-transition:opacity 0s;
    }
    .segment:nth-child(1) {
        top:10px;
        left:16px;
        right:16px;
        height:10px;
    }
    .segment:nth-child(2) {
      top:20px;
      right:10px;
      width:10px;
      height:75px;
      height:calc(50% - 20px);
    }
    .segment:nth-child(3) {
      bottom:20px;
      right:10px;
      width:10px;
      height:75px;
      height:calc(50% - 20px);
    }
    .segment:nth-child(4) {
      bottom:10px;
      right:16px;
      height:10px;
      left:16px;
    }
    .segment:nth-child(5) {
      bottom:20px;
      left:10px;
      width:10px;
      height:75px;
      height:calc(50% - 20px);
    }
    .segment:nth-child(6) {
      top:20px;
      left:10px;
      width:10px;
      height:75px;
      height:calc(50% - 20px);
    }
    .segment:nth-child(7) {
      bottom:95px;
      bottom:calc(50% - 5px);
      right:19px;
      left:19px;
      height:10px;
    }
  }
  .systemTime-main{
    display: inline-block;
    .systemTime-title{
      background-color: rgb(255, 166, 75);
      font-size: 30px;
      width: 200px;
      text-align: center;
      margin-left: calc(50% - 100px);
    }
    .systemTime-date{
      .date-numble{
        width: 60px;
        height: 100px;
        margin-right: -10px;
        display: inline-block;
        position: relative;
        .segment {
          background:#00DCFF;
          border-radius:5px;
          position:absolute;
          opacity:0.15;
          transition:opacity 0.2s;
          -webkit-transition:opacity 0.2s;
          -ms-transition:opacity 0.2s;
          -moz-transition:opacity 0.2s;
          -o-transition:opacity 0.2s;
        }
        .segment.on, .separator {
          opacity:1;
          // box-shadow:0 0 50px rgba(255,0,0,0.7);
          transition:opacity 0s;
          -webkit-transition:opacity 0s;
          -ms-transition:opacity 0s;
          -moz-transition:opacity 0s;
          -o-transition:opacity 0s;
        }
        .segment:nth-child(1) {
            top:10px;
            left:16px;
            right:16px;
            height:10px;
        }
        .segment:nth-child(2) {
          top:20px;
          right:10px;
          width:10px;
          height:75px;
          height:calc(50% - 20px);
        }
        .segment:nth-child(3) {
          bottom:20px;
          right:10px;
          width:10px;
          height:75px;
          height:calc(50% - 20px);
        }
        .segment:nth-child(4) {
          bottom:10px;
          right:16px;
          height:10px;
          left:16px;
        }
        .segment:nth-child(5) {
          bottom:20px;
          left:10px;
          width:10px;
          height:75px;
          height:calc(50% - 20px);
        }
        .segment:nth-child(6) {
          top:20px;
          left:10px;
          width:10px;
          height:75px;
          height:calc(50% - 20px);
        }
        .segment:nth-child(7) {
          bottom:95px;
          bottom:calc(50% - 5px);
          right:19px;
          left:19px;
          height:10px;
        }
      } 
    }
  }
}
</style>