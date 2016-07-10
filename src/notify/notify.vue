<style scoped>
  .alert {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 4px 10px;
    min-width: 100px;
    min-height: 25px;
    border-radius: 17px;
    text-align: center;
    line-height: 2;
    font-size: 12px;
    color: #FFFFFF;
    transform: translateX(-50%) translateY(-280%);
    box-shadow: 1px 4px 6px 1px #D2CDCD;
    z-index: 10;
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
  <div class="alert" :class="msgClass" v-if="isShow" transition="alert" v-text="msg"></div>
</template>

<script>
  export default {
    name: "Notify",
    data() {
      return {
        msg: "",
        msgClass: "success",
        isShow: false
      }
    },
    methods: {
      success(msg, delay){
        this.msgClass = "success"
        this.pushMsg(msg, delay)
      },
      info(msg, delay){
        this.msgClass = "info"
        this.pushMsg(msg, delay)
      },
      warn(msg, delay){
        this.msgClass = "warn"
        this.pushMsg(msg, delay)
      },
      error(msg, delay){
        this.msgClass = "error"
        this.pushMsg(msg, delay)
      },
      pushMsg(msg, delay){
        this.msg = msg
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
        }, delay * 1000)
      }
    }
  }
</script>
