<template>
    <div class="Warehouse">
        <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
     <Collapse v-model="value" accordion class="box">
        <Panel name="1">
            vue2.0+node.js+MongoDB全栈打造商城
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1oldhd1z4zrHYtPZUl6zAPA 密码: c87i</p>
        </Panel>
        <Panel name="2">
            vue.js高仿饿了么（1-13章全）
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1HTEwz14Vxu76a__yXZhEsQ 密码: 85dk</p>
        </Panel>
        <Panel name="3">
            传智 - Vue.js+Node.js构建音乐播放器 公开课
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1eREKGxBEj9wfKqxnxWeHXA 密码: hrm5</p>
        </Panel>
        <Panel name="4">
            IT书籍
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1QAg6Yqx7FvIEsQXLrr1W5w 密码: uxbw</p>
        </Panel>
        <Panel name="5">
            带你入门Vue 2.0及案例开发
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1XcGQpC4ONa1sJSnYfczbjQ 密码: rkrr</p>
        </Panel>
        <Panel name="6">
            vue全家桶
            <p class="content" slot="content">链接: https://pan.baidu.com/s/14j64NCRGL9TWD7o1w43DUQ 密码: awup</p>
        </Panel>
        <Panel name="7">
            强力Django 和杀手级xadmin
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1W5X07lyWK1GsPN3AhIOYog 密码: jyxp</p>
        </Panel>
         <Panel name="8">
            PHP入门资料
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1-fqYWzHPC5e1_JzWvBMGQQ 密码: qa69</p>
        </Panel>
         <Panel name="9">
            WEB前端入门基础
            <p class="content" slot="content">链接: https://pan.baidu.com/s/1TVeqP1Kqdrt6HuD9Koo-Ew 密码: em1t</p>
        </Panel>

        
    </Collapse>
    </div>
</template>
<script>
export default {
    name:"Warehouse",
    data(){
        return{
            value:"0",
        }
    }
}
</script>
<style lang="less" scoped>
@fcolor : #285aa5;
@bgcolor :rgba(255, 255, 255, 0.7);
@bgborder : rgba(255, 255, 255, 0.1);
.Warehouse {
  width: 800px;
  height: 600px;
  margin: 100px auto;
  background-color: @bgcolor;
  border: 30px solid @bgborder;
  box-sizing: border-box;
  padding: 0 20px;
  a {
    color: #333;
  }
  .back {
    margin: 5px 10px;
    margin-left: -10px;
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
  .box{
      margin-top: 20px;
      background: rgba(255,255,255,.2);
     
  }

}

</style>
<style>
 .ivu-collapse-content{
                background-color: rgba(255,255,255,.4)!important;
      }
</style>


