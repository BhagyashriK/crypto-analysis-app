import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import humanizeCurrency from "../../../utilities/humanize-currency";

highcharts3d(Highcharts);

// Give the points a 3D feel by adding a radial gradient
Highcharts.setOptions({
  colors: Highcharts.getOptions().colors.map(function(color) {
    return {
      radialGradient: {
        cx: 0.4,
        cy: 0.3,
        r: 0.5
      },
      stops: [
        [0, color],
        [
          1,
          Highcharts.Color(color)
            .brighten(-0.2)
            .get("rgb")
        ]
      ]
    };
  })
});

const getOptions = inputData => {
  return {
    chart: {
      type: "scatter3d",
      renderTo: "container",
      backgroundColor: "#404b69",
      margin: 100,
      animation: false,
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 30,
        depth: 250,
        viewDistance: 5,
        fitToPlot: false,
        frame: {
          bottom: { size: 1, color: "rgba(0,0,0,0.2)" },
          back: { size: 1, color: "rgba(0,0,0,0.4)" },
          side: { size: 1, color: "rgba(0,0,0,0.6)" }
        }
      }
    },
    turboThreshold: inputData.length,
    credits: {
      enabled: false
    },
    title: {
      text: "Scatter plot for Liquidity",
      style: {
        color: "#fff"
      }
    },
    yAxis: {
      title: {
        enabled: true,
        text: "Volume",
        style: {
          color: "#fff"
        }
      },
      labels: {
        style: {
          color: "#b1b5b7"
        }
      }
    },
    xAxis: {
      gridLineWidth: 1,
      title: {
        enabled: true,
        text: "Market Capitalization",
        style: {
          color: "#fff"
        }
      },
      labels: {
        style: {
          color: "#b1b5b7"
        }
      }
    },
    zAxis: {
      showFirstLabel: false,
      title: {
        enabled: true,
        text: "Price Change",
        style: {
          color: "#fff"
        }
      },
      labels: {
        style: {
          color: "#b1b5b7"
        }
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      formatter: function(chart) {
        const { point } = this;
        return `<b>Name:</b> ${
          point.name
        }<br> <b>Market Cap:</b> ${humanizeCurrency({
          number: point.x
        })} <br> <b>Volume (24h):</b> ${humanizeCurrency({
          number: point.y
        })} <br> <b>Price Change:</b> ${point.z} %`;
      }
    },
    series: [
      {
        colorByPoint: true,
        data: inputData
      }
    ]
  };
};

export default getOptions;
