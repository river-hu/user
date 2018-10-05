<template>
  <div id="app">
    <transition name="slide-fade">
    <router-view/>
    </transition>
    
  </div>
</template>
<script>
    export default {
      name:"app",
      created(){
        this.$Notice.warning({
                    title: '网站提醒',
                    desc: "网站尚未完善，请耐心等待"
                });
      }
    };
  
</script>


<style>
    body {
      background: url(../public/bg.jpg) center 0 no-repeat;
      background-size: 1920px 1080px;
      transition: background 1s linear;
        -webkit-animation: bgan ease-in-out 2s infinite;
    animation: bgan ease-in-out 2s infinite;
    }
    @-webkit-keyframes bgan {
  0% {
    background-position: center 0px;
  }
  50% {
    background-position: center -20px;
  }
  100% {
    background-position: center 0px;
  }
}

@keyframes bgan {
  0% {
    background-position: center 0px;
  }
  50% {
    background-position: center -20px;
  }
  100% {
    background-position: center 0px;
  }
}
    .slide-fade-enter-active {
    transition: all .4s ease;
    }
    .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.8,0.2 ,0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(30px);
    opacity: 0;
    }
</style>
