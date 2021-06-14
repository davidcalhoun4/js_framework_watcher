<template>
  <div class="Forks">
    <h3>JavaScript Framework Watcher</h3>
    <hr />
    <div>
      <highcharts class="hc" :options="chartForks" ref="barChart"></highcharts>
    </div>
    <p>Vue Forks: {{ vue_forks }}</p>
    <hr />

    <p>Angular Forks: {{ angular_forks }}</p>
    <hr />

    <p>Ember Forks: {{ ember_forks }}</p>
    <hr />

    <p>Svelte Forks: {{ svelte_forks }}</p>
    <hr />

    <p>React Forks: {{ react_forks }}</p>
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
      vue_forks: "",
      angular_forks: "",
      ember_forks: "",
      svelte_forks: "",
      react_forks: "",
      chartForks: {
        chart: {
          type: "column",
        },
        title: {
          text: "Forks",
        },
        xAxis: {
          categories: ["Forks"],
          crosshair: true,
          title: {
            text: "Frameworks",
          },
        },
        yAxis: {
          min: 0,
          title: {
            text: "Count",
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
            // in order of x-axis, plug in "Vue.js", "Angular", "Ember", "Svelte", "React"
            // [this.vue_stars, this.angular_stars, this.ember_stars, this.svelte_stars, this.react_stars]
          },
          {
            name: "Angular",
            data: [],
            // [this.vue_forks, this.angular_forks, this.ember_forks, this.svelte_forks, this.react_forks]
          },
          {
            name: "Ember",
            data: [],
            // [this.vue_watchers, this.angular_watchers, this.ember_watchers, this.svelte_watchers, this.react_watchers]
          },
          {
            name: "Svelte",
            data: [],
            // [this.vue_watchers, this.angular_watchers, this.ember_watchers, this.svelte_watchers, this.react_watchers]
          },
          {
            name: "React",
            data: [],
            // [this.vue_watchers, this.angular_watchers, this.ember_watchers, this.svelte_watchers, this.react_watchers]
          },
        ],
      },
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      this.vue_forks = response.data.forks_count;
      this.chartForks.series[0].data = [response.data.forks_count];
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      this.angular_forks = response.data.forks_count;
      this.chartForks.series[1].data = [response.data.forks_count];
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      this.ember_forks = response.data.forks_count;
      this.chartForks.series[2].data = [response.data.forks_count];
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      this.svelte_forks = response.data.forks_count;
      this.chartForks.series[3].data = [response.data.forks_count];
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      this.react_forks = response.data.forks_count;
      this.chartForks.series[4].data = [response.data.forks_count];
    });
  },
  methods: {},
};
</script>
