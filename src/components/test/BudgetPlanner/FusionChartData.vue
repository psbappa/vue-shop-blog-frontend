<template>
    <div id="chart-container">
        <div class="fusion-chart">
            <div class="show-test-data">
                <span>{{selectedTableValueData}}</span>
            </div>
            <fusioncharts
                :type="type"
                :dataFormat="dataFormat"
                :dataSource="dataSource"
                :dataEmptyMessage="message"
                :events="events"
                ref="fc"
            ></fusioncharts>
            <div v-html="displayValue"></div>

            <div class="chart-type">
                <div class="chart-type-Column2d">
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Column2d" checked/>
                    <label>Column 2D Chart</label>
                </div>
                <div class="chart-type-Bar2d">
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Bar2d" />
                    <label>Bar 2D Chart</label>
                </div>
                <div class="chart-type-Pie2d">
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="Pie2d" />
                    <label>Pie 2D Chart</label>
                </div>
                <div class="chart-type-line">
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="line" />
                    <label>Line</label>
                </div>
                <div class="chart-type-doughnut2d">
                    <input name='chartType' type="radio" @change="onChartTypeChange" value="doughnut2d" />
                    <label>Doughnut2d</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FusionCharts from "fusioncharts";

    FusionCharts.options["license"]({
        key: "",
        creditLabel: false,
    });

    FusionCharts.options.creditLabel = false;

    // console.log('FusionCharts', FusionCharts);

    export default {
        name: 'FusionchartData',
        props: ['selectedTableValueData'],
        data: function () {
            return {
                type: "column2d",
                renderAt: 'chart-container',
                id: 'myChart',
                width: "6000",
                height: "300",
                message: "Chart does not has data to render...",
                dataFormat: "json",
                dataSource: {
                    chart: {
                        theme: "fusion",
                        caption: "Budget chart show",
                        subCaption: "budget estimation",
                        xAxisName: "category",
                        yAxisName: "Amount spends (In Rs)",
                        numberPrefix: "Rs",
                        showBorder: "1",
                    },
                    data: [
                        {
                            label: "Food",
                            value: "5000",
                        },
                        {
                            label: "Traveling",
                            value: "500",
                        }
                    ],
                },
                events: {
                    dataPlotRollOver: function (e) {
                        console.log(`You are currently hovering over <strong>${e.data.categoryLabel}</strong> whose value is <strong>${e.data.displayValue}</strong>`)
                        this.displayValue = `You are currently hovering over <strong>${e.data.categoryLabel}</strong> whose value is <strong>${e.data.displayValue}</strong>`;
                    },
                },
            };
        },
        methods: {
            dataPlotRollOver: function (e) {
                console.log(`You are currently hovering over <strong>${e.data.categoryLabel}</strong> whose value is <strong>${e.data.displayValue}</strong>`)
                this.displayValue = `You are currently hovering over <strong>${e.data.categoryLabel}</strong> whose value is <strong>${e.data.displayValue}</strong>`;
            },
            // uses the chartInstance API 'chartType' to change the chart type after render
            onChartTypeChange: function (e) {
                const chart = this.$refs.fc.chartObj,
                    type = e.target.value.toLowerCase();
                chart.chartType(type);
            },
            onChartReRender: function() {
                // console.log('selectedTableValueData', this.selectedTableValueData[1].expenses)
                console.log('onChartReRender static fusion value', this.dataSource.data[0], this.dataSource.data[1])
                this.selectedTableValueData.forEach( (val) =>
                    console.log('Data from props value:', val.category,val.expenses)
                    
                );

            }
        },
        computed: {
            
        },
        beforeCreate: function() {
            console.log('Child Life Cycle - Before Created', this.dataSource)
        },
        created: function() {
            console.log('Child Life Cycle - Created', this.dataSource.data[1].value = '1000', this.dataSource.data[1].value = '1000')
            this.onChartReRender()
        },
        // beforeMount: function() {
        //     console.log('Child Life Cycle - Before mount', this.dataSource)
        // },
        // mounted: function() {
        //     console.log('Child Life Cycle - Mount', this.dataSource)
        // }
         
    }
</script>

<style scoped>

</style>