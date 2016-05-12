# vue-notification
a message notification for vue

### Useage

#### init

> `import Notify from './src/notify.js'`
> 
> `Vue.use(Notify)`

#### use

`this.$notify.` **method** `(message, deplay)`


**message** `String` notification message

**deplay**	`Int` deplay time (`second`)


#### demo

`success`

> `this.$notify.success("success message", 2)`


`info`
 
> `this.$notify.info("info message", 2)`


`warn`

> `this.$notify.warn("warn message", 2)`

`error`

> `this.$notify.error("error message", 2)`
 