<template>
  <div class="about">
    <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang="less" scoped>
  @fcolor : #285aa5;
  @bgcolor :rgba(255, 255, 255, 0.7);
  @bgborder : rgba(255, 255, 255, 0.1);
  .about{
    width: 800px;
    height: 600px;
    margin: 100px auto;
    background-color: @bgcolor;
    border: 30px solid @bgborder;
    box-sizing: border-box;
    a{
      color: #333;
    }
    .back{
      margin: 5px 10px;
      width: 50px;
      height: 50px;
      font-size: 30px;
      text-align: center;
      line-height: 50px;
      border-radius: 8px;
      transition: all .3s linear;
    }
    .back:hover{
      background-color: rgba(255, 255, 255, 0.4);
      color:@fcolor;
    }

  }
</style>
