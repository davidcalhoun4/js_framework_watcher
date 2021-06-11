<template>
  <div class="home">
    <h1>JS Framework Watcher</h1>

    <highcharts class="hc" :options="chartOptions" ref="barChart"></highcharts>

    <h1>Vue Watchers: {{ vue_watchers }}</h1>
    <h1>Vue Stars: {{ vue_stars }}</h1>
    <h1>Vue Forks: {{ vue_forks }}</h1>
    <hr />
    <h1>angular Watchers: {{ angular_watchers }}</h1>
    <h1>angular Stars: {{ angular_stars }}</h1>
    <h1>angular Forks: {{ angular_forks }}</h1>
    <hr />
    <h1>ember Watchers: {{ ember_watchers }}</h1>
    <h1>ember Stars: {{ ember_stars }}</h1>
    <h1>ember Forks: {{ ember_forks }}</h1>
    <hr />
    <h1>svelte Watchers: {{ svelte_watchers }}</h1>
    <h1>svelte Stars: {{ svelte_stars }}</h1>
    <h1>svelte Forks: {{ svelte_forks }}</h1>
    <hr />
    <h1>react Watchers: {{ react_watchers }}</h1>
    <h1>react Stars: {{ react_stars }}</h1>
    <h1>react Forks: {{ react_forks }}</h1>
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
      vue_stars: 0,
      vue_watchers: 0,
      vue_forks: 0,
      angular_stars: 0,
      angular_watchers: 0,
      angular_forks: 0,
      ember_stars: 0,
      ember_watchers: 0,
      ember_forks: 0,
      svelte_stars: 0,
      svelte_watchers: 0,
      svelte_forks: 0,
      react_stars: 0,
      react_watchers: 0,
      react_forks: 0,
      chartOptions: {
        chart: {
          type: "column",
        },
        title: {
          text: "JavaScript Framework Watcher",
        },
        xAxis: {
          categories: ["Vue.js", "Angular", "Ember", "Svelte", "React"],
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
            name: "Stars",
            data: [100, 10, 10, 10, 10],
          },
          {
            name: "Forks",
            data: [100, 10, 10, 10, 10],
          },
          {
            name: "Watchers",
            data: [100, 10, 10, 10, 10],
          },
        ],
      },
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
      console.log(response.data);
      this.vue_stars = response.data.stargazers_count;
      this.vue_watchers = response.data.subscribers_count;
      this.vue_forks = response.data.forks_count;
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      console.log(response.data);
      this.angular_stars = response.data.stargazers_count;
      this.angular_watchers = response.data.subscribers_count;
      this.angular_forks = response.data.forks_count;
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      console.log(response.data);
      this.ember_stars = response.data.stargazers_count;
      this.ember_watchers = response.data.subscribers_count;
      this.ember_forks = response.data.forks_count;
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      console.log(response.data);
      this.svelte_stars = response.data.stargazers_count;
      this.svelte_watchers = response.data.subscribers_count;
      this.svelte_forks = response.data.forks_count;
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      console.log(response.data);
      this.react_stars = response.data.stargazers_count;
      this.react_watchers = response.data.subscribers_count;
      this.react_forks = response.data.forks_count;
    });
  },
  methods: {},
};
</script>
