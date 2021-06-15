<template>
  <div class="Watchers">
    <!-- <h3>JavaScript Framework Watcher</h3> -->
    <hr />
    <br />

    <highcharts class="hc" :options="chartWatchers" ref="barChart"></highcharts>
    <br />
    <br />
    <br />
    <p>Vue Watchers: {{ vue_watchers }}</p>
    <hr />
    <p>Angular Watchers: {{ angular_watchers }}</p>
    <hr />
    <p>Ember Watchers: {{ ember_watchers }}</p>
    <hr />
    <p>Svelte Watchers: {{ svelte_watchers }}</p>
    <hr />
    <p>React Watchers: {{ react_watchers }}</p>
  </div>
</template>

<style>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 310px;
  max-width: 800px;
  margin: 1em auto;
}
#container {
  height: 400px;
}
.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}
.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}
.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}
.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}
.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}
.highcharts-data-table tr:hover {
  background: #f1f7ff;
}
</style>

<script>
import axios from "axios";
import { Chart } from "highcharts-vue";
export default {
  components: {
    highcharts: Chart,
  },
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      vue_watchers: "",
      angular_watchers: "",
      ember_watchers: "",
      svelte_watchers: "",
      react_watchers: "",
      chartWatchers: {
        chart: {
          type: "column",
        },
        title: {
          text: "Watchers",
        },
        xAxis: {
          categories: ["Frameworks"],
          crosshair: true,
          title: {
            text: "",
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Number of Watchers",
          },
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "top",
          x: -60,
          y: 100,
          floating: true,
          borderWidth: 1,
          backgroundColor: "#FFFFFF",
          shadow: true,
        },
        credits: {
          enabled: true,
        },
        series: [
          {
            name: "Vue",
            data: [],
          },
          {
            name: "Angular",
            data: [],
          },
          {
            name: "Ember",
            data: [],
          },
          {
            name: "Svelte",
            data: [],
          },
          {
            name: "React",
            data: [],
          },
        ],
      },
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      this.vue_watchers = response.data.subscribers_count;
      this.chartWatchers.series[0].data = [response.data.subscribers_count];
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      this.angular_watchers = response.data.subscribers_count;
      this.chartWatchers.series[1].data = [response.data.subscribers_count];
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      this.ember_watchers = response.data.subscribers_count;
      this.chartWatchers.series[2].data = [response.data.subscribers_count];
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      this.svelte_watchers = response.data.subscribers_count;
      this.chartWatchers.series[3].data = [response.data.subscribers_count];
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      this.react_watchers = response.data.subscribers_count;
      this.chartWatchers.series[4].data = [response.data.subscribers_count];
    });
  },
  methods: {},
};
</script>
