<template>
<div class="code">
     <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
     <Tabs >
        <TabPane label="算法研究"  icon="md-code-working">标签一的内容</TabPane>
        <TabPane label="爬虫研究"  icon="ios-bug">标签二的内容</TabPane>
        <TabPane label="其他js研究"  icon="logo-javascript">标签三的内容</TabPane>
    </Tabs>
 
</div>    
</template>
<script>
export default {
    name:"mycode"
}
</script>
<style lang="less" scoped>
@fcolor : #285aa5;
@bgcolor :rgba(255, 255, 255, 0.7);
@bgborder : rgba(255, 255, 255, 0.1);
 .ivu-tabs-nav-container{
      font-size: 20px!important;
  }
.code {
  width: 80%;
  min-width: 600px;
  height: 800px;
  margin: 50px auto;
  background-color: @bgcolor;
  border: 30px solid @bgborder;
  box-sizing: border-box;
  position: relative;
  padding-top: 10px;
  a {
    color: #333;
  }
  .back {
    margin: 5px 10px;
    width: 40px;
    height: 40px;
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    border-radius: 8px;
    transition: all 0.3s linear;
    position: absolute;
    right: 0;
    z-index: 999;
    top: -5px;
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

