<template>
  <div class="about">
    <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
    <div class="box">
        <div class="list">
          毕业于郑州科技学院，2017年开始从事前端开发工作
        </div>
        <div class="list"> <a target="_blank" href="http://blog.csdn.net/huchangjiang0">我的博客:http://blog.csdn.net/huchangjiang0</a> </div>

        <div class="list"><a target="_blank" href="https://github.com/supper1">我的github:https://github.com/supper1</a></div>

        <div class="list">
          我的公众号 《web全栈学习》
        </div>
        <div class="list">
          我的小程序 《生活百科查询》《释压都市》
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="less" scoped>
@fcolor : #285aa5;
@bgcolor :rgba(255, 255, 255, 0.7);
@bgborder : rgba(255, 255, 255, 0.1);
.about {
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
  .box {
    text-align: center;
    margin-top: 80px;
    .list{
      font-size: 20px;
      line-height: 50px;
    }
  }
}
</style>
