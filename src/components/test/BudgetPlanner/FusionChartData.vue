<template>
    <div id="chart-container">
        <div class="fusion-chart">
            <fusioncharts
                :type="type"
                :dataFormat="dataFormat"
                :dataSource="dataSource"
                :dataEmptyMessage="message"
                :events="events"
                ref="fc"
            ></fusioncharts>
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

    console.log('FusionCharts', FusionCharts);

    export default {
        name: 'FusionchartData',
        data: function () {
        return {
        type1: "chord",
        type: "column2d",
        width: "6000",
        height: "300",
        message: "Chart does not has data to render...",
        dataFormat: "json",
        dataSource: {
            chart: {
            caption: "Budget chart show",
            subCaption: "budget estimation",
            xAxisName: "category",
            yAxisName: "Amount spends (In Rs)",
            numberPrefix: "Rs",
            theme: "fusion",
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
            console.log(e.eventType);
            },
        },
        };
    },
    }
</script>

<style scoped>
#chart-container {
  height: 20px;
  /* width: 500px; */
}
</style>