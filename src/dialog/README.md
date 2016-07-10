### **Dialog**

> useage：replace`Javascript`origin`confirm`。

#### import
> `import Dialog from './dialog.js'`
>
> `Vue.use(Dialog)`  

#### Useage   

    this.$dialog.show(message, callback)

#### params
**message**: prompt message
**callback**: callback function (returns {Boolean})

#### Example:

    this.$dialog.show("Delete?", flag => {
        if(flag){
            console.info("sure")
            return
        }
        console.warn("cancel");
    });
