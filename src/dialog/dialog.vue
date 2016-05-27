<style lang="sass?outputStyle=expanded" scoped>
   .dialog-container {
       font-size: 12px;
       position: fixed;
       left: 0;
       top: 0;
       height: 100vh;
       width: 100vw;
       z-index: 50;

       .dialog-content {
           position: absolute;
           height: 20vh;
           width: 60vw;
           left: 50%;
           top: 40%;
           text-align: center;
           border-radius: 4px;
           background: #FFFFFF;
           box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
           transform: translateX(-50%) translateY(-40%);
           -webkit-transform: translateX(-50%) translateY(-40%);
           z-index: 60;

           .content {
               height: 14vh;
               line-height: 14vh;
           }

           .bottom {
               height: 5.9vh;
               line-height: 5.9vh;
               border-top: 1px solid #D5D5D6;

               span {
                   width: 29vw;
                   display: inline-block;
                   cursor: pointer;
               }

               span:last-child {
                   color: #3CC51F;
                   border-left: 1px solid #D5D5D6;
               }
           }
       }
   }

   .bounce-transition {
       display: inline-block;
   }

   .bounce-enter {
       animation: bounce-in .3s;
   }

   .bounce-leave {
       animation: bounce-out .3s;
   }

   @keyframes bounce-in {
       0% {
           transform: scale(0);
       }
       100% {
           transform: scale(1);
       }
   }
   @keyframes bounce-out {
       0% {
           transform: scale(1);
       }
       100% {
           transform: scale(0);
       }
   }
</style>
<template>
    <div class="dialog-container" transition="bounce" v-if="isShow">
        <div class="dialog-content">
            <div class="content">
                <p>{{message}}</p>
            </div>
            <div class="bottom">
                <span @click="cancel">取消</span>
                <span @click="confirm">确定</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: "Dialog",
        data(){
            return{
               isShow: false,
               isConfirm: false,
               message: "参数为空",
               callBack: null
            }
        },
        methods: {
            show: function (msg, callback) {
                this.message = msg;
                this.isShow = true;
                this.callBack = callback;
            },
            confirm: function () {
                this.isConfirm = true;
                this.init();
            },
            cancel: function(){
                this.isConfirm = false;
                this.init();
            },
            init: function () {
                this.isShow = false;
                this.callBack(this.isConfirm);
            }
        }
    }
</script>