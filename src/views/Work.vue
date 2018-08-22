<template>
    <div class="work">
    <Card class="list"  >
        <p slot="title" >
           轩鸿医药
        </p>
        <p>
            微商城项目，项目地址为公众号《轩鸿堂健康交流平台》。兼具传统的微商城的所有功能，相比传统的微商城项目多了三级分销的功能，还有一个论坛的功能。
        </p>
    </Card>
        <Card class="list"  >
        <p slot="title" >
           个人求职网站
        </p>
        <p>
            pc端项目，本人的毕业设计，采用了vue全家桶与axios，后台采用php，数据库mysql。前后端分离，单页面项目。项目地址:
            https://github.com/supper1/work
        </p>
    </Card>
     <Card class="list"  >
        <p slot="title" >
           千寻网络
        </p>
        <p>
            pc端项目，响应式pc站，主要应用了响应式布局。项目的地址为：http://www.qx1688.net
        </p>
    </Card>
     <Card class="list"  >
        <p slot="title" >
           口令红包
        </p>
        <p>
            公众号内的推广活动，包含红包地图功能，语音口令，模糊识别，生成分享图片。区域红包领取限制。项目地址为公众号《汇客多同城惠》
        </p>
    </Card>
       <Card class="list"  >
        <p slot="title" >
           汇客云街
        </p>
        <p>
            公众号商城项目，为传统门店提供更有力的营销方式，为门店引流。提供区域网上销售平台，包含聚合支付功能。项目地址为公众号《汇客多同城惠》
        </p>
    </Card>
     <Card class="list"  >
        <p slot="title" >
           返回
        </p>
        <p>
            <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
        </p>
    </Card>
    
    
            
    </div>
</template>
<script>
export default {
  name: "work",
  data(){
      return{

      }
      
  },
  methods:{

  }
};
</script>

<style lang="less" scoped>
@fcolor : #285aa5;
@bgcolor :rgba(255, 255, 255, 0.7);
@bgborder : rgba(255, 255, 255, 0.1);
.work {
  width: 80%;
  min-width: 800px;
  margin: 30px auto;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  .list{
      width: 350px;
     margin: 20px;
     transition: all .5s linear;
     -webkit-animation: float ease-in-out 2s infinite;
    animation: float ease-in-out 2s infinite;
  }
  .fz{
      font-size: 14px;
      margin: 5px 0;
  }
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
}
@-webkit-keyframes float {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>


