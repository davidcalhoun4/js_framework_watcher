<template>
  <div class="Stars">
    <h3>JavaScript Framework Watcher</h3>
    <hr />

    <highcharts class="hc" :options="chartStars" ref="barChart"></highcharts>

    <p>Vue Stars: {{ vue_stars }}</p>
    <hr />
    <p>Angular Stars: {{ angular_stars }}</p>
    <hr />
    <p>Ember Stars: {{ ember_stars }}</p>
    <hr />
    <p>Svelte Stars: {{ svelte_stars }}</p>
    <hr />
    <p>React Stars: {{ react_stars }}</p>
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
      vue_stars: "",
      angular_stars: "",
      ember_stars: "",
      svelte_stars: "",
      react_stars: "",
      chartStars: {
        chart: {
          type: "column",
        },
        title: {
          text: "Stars",
        },
        xAxis: {
          categories: ["Stars"],
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
      this.vue_stars = response.data.stargazers_count;
      this.chartStars.series[0].data = [response.data.stargazers_count];
    });
    axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
      this.angular_stars = response.data.stargazers_count;
      this.chartStars.series[1].data = [response.data.stargazers_count];
    });
    axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
      this.ember_stars = response.data.stargazers_count;
      this.chartStars.series[2].data = [response.data.stargazers_count];
    });
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      this.svelte_stars = response.data.stargazers_count;
      this.chartStars.series[3].data = [response.data.stargazers_count];
    });
    axios.get("https://api.github.com/repos/facebook/react").then((response) => {
      this.react_stars = response.data.stargazers_count;
      this.chartStars.series[4].data = [response.data.stargazers_count];
    });
  },
  methods: {},
};
</script>
