export default{
    install(Vue, options){
        Vue.prototype.$log = Obj => {
            if(typeof Obj === 'object'){
                console.info(JSON.stringify(Obj, null, 2))
            }else{
                console.info(`%c [INFO] ${Obj}`, 'font-size16px;color:#c92f56');
            }
        };
    }
}
