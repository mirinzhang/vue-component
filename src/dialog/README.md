### **Dialog**

> 用途：代替`Javascript`原生`confirm`。
    
#### 使用   

    this.$dialog.show(message, callback)


#### 参数
    `message`: 提示信息
    `callback`: 回调函数（返回值`flag`为Boolean类型）

#### 示例:

    this.$dialog.show("确定删除吗？", function(flag){
        if(flag){
            console.info("确定");
        }else{
            console.warn("取消");
        ]
    }.bind(this));