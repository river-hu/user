<template>
    <div class="skill">
          <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
        <div class="box">
            <div class="list">HTML</div>
            <div class="list">CSS</div>
            <div class="list">JAVAScript</div>
            <div class="list">JQuery</div>
            <div class="list">Bootstrap</div>
            <div class="list">Vue</div>
            <div class="list">axios</div>
            <div class="list">Vue-router</div>
            <div class="list">Vuex</div>
            <div class="list">iview</div>
            <div class="list">vant</div>
            <div class="list">微信公众号开发</div>
            <div class="list">微信小程序开发</div>
            <div class="list">Nodejs</div>
            <div class="list">express</div>
            <div class="list">Mysql</div>
            <div class="list">PHP</div>
            <div class="list">Python</div>
            <div class="list">响应式开发</div>
            <div class="list">网络爬虫</div>
        
        </div>
    </div>
</template>
<script>
export default {
  name: "skill"
};
</script>

<style lang="less" scoped>
@fcolor : #285aa5;
@bgcolor :rgba(255, 255, 255, 0.7);
@bgborder : rgba(255, 255, 255, 0.1);
.skill {
  width: 800px;
  height: 600px;
  margin: 100px auto;
  background-color: @bgcolor;
  border: 30px solid @bgborder;
  box-sizing: border-box;
  a {
    color: #333;
  }
  .back {
    margin: 5px 10px;
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    border-radius: 8px;
    transition: all 0.3s linear;
  }
  .back:hover {
    background-color: rgba(255, 255, 255, 0.4);
    color: @fcolor;
  }
  .list{
      display: inline-block;
      background: rgba(255, 255, 255, 0.4);
      font-size: 20px;
      padding: 10px 15px;
      margin: 20px;
      transition: all .2s linear;
      border-radius: 5px;
  }
  .list:hover{
      box-shadow: 0px 5px 8px #999;
  }
}
</style>

