<template>
    <div class="budget-bar-chart-js">
        <h4>vue-chartjs.js</h4>
        <div class="show-test-data">
            <pre>
                {{ JSON.stringify(selectedTableValueData, null, 2) }}
            </pre>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'BudgetBarChartjs',
        props: ['selectedTableValueData'],
        data() {
            return {
                ChartConfig: {
                    labels: [],
                    datasets: [
                        {
                            data: [],
                            backgroundColor: '#3498db',
                            borderColor: 'rgba(136,136,136,0.5)',
                            label: "2013"
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            categoryPercentage: 0.5,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Value'
                            }
                        }]
                    }
                },
                iceCream: [],
                drawer: false
            }
        },
        mounted: function() {
            this.getListData();
        },
        methods: {
            getListData: async function() {
                this.status = "getting data...";

                await axios.get("https://my-json-server.typicode.com/isogunro/jsondb/IceCream").then((response) => {
                    // console.log(response.data)
                    this.getChartData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },

            getChartData: function (chartData) {
                // console.log(chartData);
                for (var i = 0; i < chartData.length; i++) {
                    this.ChartConfig.labels.push(chartData[i].Flavor)
                    //this.$set(this.ChartConfig.labels,i,chartData[i].Flavor)
                }

                for (i = 0; i < chartData.length; i++) {
                this.ChartConfig.datasets[0].data.push(chartData[i].Vote)
                    //this.$set(this.ChartConfig.labels,i,chartData[i].Vote)
                }
                // console.log(this.ChartConfig);
            }
        }
    }
</script>

<style scoped>

</style>