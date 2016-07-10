import Chart from 'chart.js'
export default {
    install(Vue, options){
        Vue.prototype.$chart = {
            init(param){
                let tempDataSets = []

                for (let index of param) {
                    tempDataSets.push({
                        label: index.title,
                        fill: index.fill,
                        backgroundColor: index.backgroundColor,
                        borderColor: index.borderColor,
                        borderCapStyle: 'square',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: index.pointBorderColor,
                        pointBackgroundColor: "#ffffff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: index.pointHoverBackgroundColor,
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: index.data
                    })
                }

                return tempDataSets
            },
            draw(params){
                let ctx = document.getElementById(params.elementId)
                let self = this

                new Chart(ctx, {
                    type: params.type,
                    data: {
                        labels: params.labels,
                        datasets: self.init(params.dataSets)
                    }
                }).render()
            }
        }
    }
}
