<template>
    <div class="msg">
      <router-link to="/">
    <div class="back"><Icon type="md-arrow-round-back" /></div>
    </router-link>
        <ul id="box" class="box">
            <li v-for="(v,index) in list" v-bind:key="index">{{v.msg}} : {{v.usr}}</li>
        </ul>
        <Input v-model="value" type="textarea" on-enter="sendto" placeholder="Enter something..." />
        <Button class="btn" type="info" @click="sendto">发送</Button>
        <Button class="btn" type="warning"  @click="clear">清除</Button>
    </div>
</template>

<script>
// or with import syntax
import io from "socket.io-client";
import axios from "axios";
export default {
  name: "msg",
  data() {
    return {
      id: "",
      ws: {},
      list: [],
      value: ""
    };
  },
  watch: {
    list: "scrollToBottom"
  },
  methods: {
    sendMsg(msg) {
       this.ws.emit('server', msg);
    },
    addMessage(from, msg) {
      console.log(msg);
      this.list.push({
        msg: from,
        usr: msg
      });
    },
    send() {
      if (!this.value) return;
      this.sendMsg(this.value);
      this.addMessage("你", this.value);
      this.value = "";
    },
    sendto() {
      this.send();
    },
    clear() {
      this.list = [];
    },
    scrollToBottom: function() {
      this.$nextTick(() => {
        var div = document.getElementById("box");

        div.scrollTop = div.scrollHeight;
      });
    }
  },
  created() {
    this.id = window.sessionStorage.getItem("userid");
    let url = this.url;
    var id = window.sessionStorage.getItem("userid");

    this.ws = io.connect(url);
    this.ws.on("connect", () => {
      this.ws.emit("join", id);
    });
    // this.ws.on("send.message", (from, msg)=> {
    //     console.log(msg)
    //   this.addMessage(from, msg);
    // });
    this.ws.on("announcement", (from, msg)=> {
      console.log(msg)
      this.addMessage(from, msg);
    });
    this.ws.on("server", (from, msg) => {
      console.log(msg)
      //检测私聊信息
      this.addMessage(from, msg);
    });
  }
};
</script>

<style lang="less" scoped>
@fcolor : #285aa5;
@bgcolor :rgba(255, 255, 255, 0.7);
@bgborder : rgba(255, 255, 255, 0.1);
.msg {
  width: 800px;
  height: 700px;
  position: absolute;
  width: 400px;
  height: 600px;
  top: 60px;
  left: 50%;
  margin-left: -200px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 30px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
}
.btn {
  margin: 20px 10px;
}
.box {
  min-height: 200px;
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background: #000;
  color: rgb(68, 245, 52);
}
::-webkit-scrollbar {
  display: none;
}
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
  right: -100px;
  z-index: 999;
  top: -30px;
  background: rgba(255, 255, 255, 0.2);
}
.back:hover {
  background-color: rgba(255, 255, 255, 0.4);
  color: @fcolor;
}
</style>


