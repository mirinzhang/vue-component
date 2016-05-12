<style>
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%) translateY(-280%);
  padding: 4px 10px;
  min-width: 100px;
  min-height: 25px;
  border-radius: 17px;
  text-align: center;
  line-height: 2;
  font-size: 12px;
  color: #ffffff;
  background: rgba(113, 216, 203, 1);
  box-shadow: 1px 4px 6px 1px #D2CDCD;
}

.success {
  background: rgba(113, 216, 203, 1);
}

.info {
  background: rgba(3,169,244,0.8);
}

.warn {
  background: rgba(255,193,7,0.8);
}

.error {
  background: rgba(255, 114, 114, 0.8);
}

.alert-transition {
  display: inline-block;
}

.alert-enter {
  animation: alert-in 1.8s
}

.alert-leave {
  animation: alert-out 1.8s
}

@keyframes alert-in {
  0% {opacity: 0}
  100% {opacity: 1}
}

@keyframes alert-out {
  0% {opacity: 1}
  100% {opacity: 0}
}

</style>

<template>
  <div class="alert" :class="msgClass" v-if="isShow" transition="alert">{{msg}}</div>
</template>

<script>
export default {
    data() {
      return {
        msg: "",
        msgClass: "success",
        isShow: true
      }
    },
    methods: {
      success: function(msg, delay){
        this.msgClass = "success"
        this.pushMsg(msg, delay)
      },
      info: function(msg, delay){
        this.msgClass = "info"
        this.pushMsg(msg, delay)
      },
      warn: function(msg, delay){
        this.msgClass = "warn"
        this.pushMsg(msg, delay)
      },
      error: function(msg, delay){
        this.msgClass = "error"
        this.pushMsg(msg, delay)
      },
      pushMsg: function(msg, delay){
        this.msg = msg;
        setTimeout(function (){
          this.isShow = false
        }.bind(this), delay * 1000);
      }
    }
}
</script>
