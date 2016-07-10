export default {
  install(Vue, options){
    Vue.prototype.$Audio = {
      audioSrc: null,
      start(url){
        if(!!!this.audioSrc){
          this.audioSrc = new Audio(url)
          this.audioSrc.play()
        }else{
          this.audioSrc.pause()
          this.audioSrc.currentTime = 0
          this.audioSrc = new Audio(url)
          this.audioSrc.play()
        }
      },
      stop(){
        if(!!!this.audioSrc) return;
        this.audioSrc.pause()
        this.audioSrc.currentTime = 0
      }
    }
  }
}
