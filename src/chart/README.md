### Chart.js for vue

> chartjs little plugin for vueJs

#### First

> npm install --save-dev chart.js

#### Second

> `import ChartDraw from './chartDraw.js'`
>
> `Vue.use(ChartDraw)`


#### Useage

> `this.$chart.draw(params)`

#### params

```javascript
{
    type: "line",
    labels: chartLabels, // Array
    elementId: "canvas", // html element Id
    dataSets: [{
        title: "chartjs canvas", // chart title
        fill: true, // true/false
        data: data, // Array
        backgroundColor: "rgba(51,153,255,0.4)",
        borderColor: "rgba(51,153,204,1)",
        pointBorderColor: "rgba(51,153,204,1)",
        pointHoverBackgroundColor: "rgba(51,153,204,1)"
    }] // Array
}
```
