<template>
  <div id="app">
    
    <router-view/>
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
</style>
