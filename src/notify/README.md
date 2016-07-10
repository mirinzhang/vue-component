# vue-notification
a message notification for vue

#### import

> `import Notify from './notify.js'`
>
> `Vue.use(Notify)`

#### Useage

`this.$notify.` **method** `(message, deplay)`

#### params
**message** `String` notification message

**deplay**	`Int` deplay time (`second`)


#### Example

`success`

> `this.$notify.success("success message", 2)`


`info`

> `this.$notify.info("info message", 2)`


`warn`

> `this.$notify.warn("warn message", 2)`

`error`

> `this.$notify.error("error message", 2)`
