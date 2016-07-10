export default {
  install(Vue, options){
    Vue.prototype.$Title = {
      changeTitle(name){
        let body = document.getElementsByTagName('body')[0]
        document.title = name
        let div = document.createElement('div')
        div.setAttribute('class', 'debide-title')
        div.innerHTML = '<iframe id="hide_frame" width="0" height="0" src="/favicon.ico"></iframe>'
        let iFrame = div.childNodes[0]
        iFrame.addEventListener('load', () => {
            setTimeout(() => {
                iFrame.removeEventListener('load', () => {})
                document.body.removeChild(div)
            }, 0);
        });
        document.body.appendChild(div)
      }
    }
  }
}
