<template>
  <div id="app">
    <transition name="slide-fade">
    <router-view/>
    </transition>
    
  </div>
</template>
<script>
    export default {
      
    };
    let a = true;
    setInterval(() => {
      a = !a;
      if (a) {
        document.body.style.backgroundPosition = "center -20px";
      } else {
        document.body.style.backgroundPosition = "center 0px";
      }
    }, 1000);
</script>


<style>
    body {
      background: url(../public/bg.jpg) center 0 no-repeat;
      background-size: 1920px 1080px;
      transition: background 1s linear;
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
