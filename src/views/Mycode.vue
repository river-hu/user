<template>
<div class="code">
     <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
     <Tabs >
        <TabPane label="算法研究"  icon="md-code-working">
          <h2>更多内容陆续添加中</h2>
            <div class="box">
              
              <h1 @click="onoff">递归实现冒泡排序</h1>
              <div class="dis-box" v-if="off">
                <div class="star" @click="star">开始</div>
                <div class="star close" @click="close">关闭</div>
                  <div class="listr" v-for="(v,index) in arr" v-bind:key="index" :style='{width:(v.a*5+"px"),top:index*55+"px"}'>
                <span>{{v.a}}</span>
                </div>
              </div>
          </div>
        </TabPane>
        <TabPane label="爬虫研究"  icon="ios-bug">
          <h2>更多内容陆续添加中</h2>
              <Card style="width:400px">
                <div style="text-align:center">
                    目标网站 ： <a href="http://www.pmtown.com/archives/category/%E6%97%A9%E6%8A%A5" class="tag" target="_BLANK">泡面早班车</a> 
                </div>
                <p>
                  实现效果：爬取新闻列表页面最新的一页数据。并组合数据返回
                </p>
                <p class="btn">
                  <Button type="info" @click="start">爬取新闻数据</Button>
                </p>
            </Card>
            <Card class="palist" v-if="data!=null">
                <div class="p_list">最新的新闻页面地址 {{data.url}}</div>
                <div class="p_list" v-for="(v,index) in data.data" v-bind:key="index">{{v.data}}</div>
            </Card>
        </TabPane>
        <TabPane label="其他js研究"  icon="logo-javascript"><h2>更多内容陆续添加中</h2>

        </TabPane>
    </Tabs>
 
</div>    
</template>
<script>
import axios from "axios";
export default {
  name: "mycode",
  data() {
    return {
      arr: [],
      off: false,
      index: 0,
      data: null
    };
  },
  methods: {
    onoff() {
      this.arr = [];
      this.index = 0;
      for (var i = 0; i < 10; i++) {
        //生成随机数
        this.arr.push({ a: Math.floor(Math.random() * 100) });
      }
      this.off = true;
    },
    star() {
      //开始排序函数
      var len = this.arr.length;
      var j = 0;
      var that = this;

      cdis(); //嵌套内部循环
      function cdis() {
        if (that.arr[j].a > that.arr[j + 1].a) {
          var temp = that.arr[j].a; //数据交换
          that.arr[j].a = that.arr[j + 1].a;
          that.arr[j + 1].a = temp;
        }
        j++;
        if (j < len - that.index - 1) {
          //内层循环终止指令
          cdis();
        }
      }
      that.index++;
      if (that.index < len) {
        //外层循环终止指令
        this.star();
      }
    },
    close() {
      this.off = false;
    },
    start() {
      let url = this.url;
      axios.get(url, { header: {} }).then(res => {
        this.data = res.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@fcolor : #285aa5;
@bgcolor :rgba(255, 255, 255, 0.7);
@bgborder : rgba(255, 255, 255, 0.1);
.ivu-tabs-nav-container {
  font-size: 20px !important;
}
.code {
  width: 80%;
  min-width: 600px;
  min-height: 800px;
  margin: 50px auto;
  background-color: @bgcolor;
  border: 30px solid @bgborder;
  box-sizing: border-box;
  position: relative;
  padding-top: 10px;
  h2 {
    line-height: 35px;
  }
  .btn {
    margin-top: 10px;
  }
  a {
    color: #333;
  }
  .tag {
    color: #285aa5;
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

  .list {
    display: inline-block;
    background: rgba(255, 255, 255, 0.4);
    font-size: 20px;
    padding: 10px 15px;
    margin: 20px;
    transition: all 0.2s linear;
    border-radius: 5px;
  }
  .list:hover {
    box-shadow: 0px 5px 8px #999;
  }
}
h1 {
  text-align: center;
}
.box {
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
}
.dis-box {
  width: 530px;
  margin: 10px auto;
  height: 550px;
  position: relative;
  border: 5px solid #795548;
  padding: 10px;
  padding-left: 20px;
  padding-top: 5px;
}
.dis-box .listr {
  height: 40px;
  position: absolute;
  transition: all 0.1s linear;
  background: #e1e1e1;
  border: 3px solid #f44336;
  box-sizing: border-box;
  font-size: 30px;
  margin-bottom: 10px;
  line-height: 38px;
  padding-left: 5px;
  left: 5px;
  border-radius: 5px;
}
.listr span {
  position: relative;
  left: -80px;
}
.star {
  position: absolute;
  top: 0;
  right: -60px;
  font-size: 20px;
  border: 2px solid red;
  border-radius: 5px;
  transition: all 0.2s linear;
}

.star:hover {
  box-shadow: 0px 5px 8px #999;
}
.close {
  top: 40px;
}
.palist {
  width: 750px;
  margin-top: 10px;
}
</style>


