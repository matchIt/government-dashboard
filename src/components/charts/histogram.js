import React from "react";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";
// lib

const categories = [
  "0-4 (CS)",
  "5-8 (CS)",
  "9-11 (CS)",
  "12-17 (JY)",
  "18-30 (YPG)",
  "31-40 (YAF)",
  "40+ (M/W F)",
];

const BarChart = ({ cardSubTextBackgroundColor, cardTitle, chartOptions }) => {
  return (
    <>
      <div>
        <div>
          <HighChartsReact highcharts={HighCharts} options={chartOptions} />
        </div>
      </div>
    </>
  );
};

BarChart.defaultProps = {
  cardTitle: "Nothing made yet",
  cardSubTextBackgroundColor: "orange",
  chartOptions: {
    chart: {
      type: "histogram",
    },
    title: {
      text: null,
    },
    accessibility: {
      point: {
        descriptionFormatter: function (point) {
          var index = point.index + 1,
            category = point.category,
            val = Math.abs(point.y),
            series = point.series.name;

          return (
            index + ", Age " + category + ", " + val + "%. " + series + "."
          );
        },
      },
    },
    xAxis: [
      {
        categories: categories,
        reversed: false,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (male)",
        },
      },
      {
        // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
          step: 1,
        },
        accessibility: {
          description: "Age (female)",
        },
      },
    ],
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter: function () {
          return Math.abs(3) + "%";
        },
      },
      accessibility: {
        description: "Percentage population",
        rangeDescription: "Range: 0 to 100%",
      },
    },

    plotOptions: {
      series: {
        stacking: "normal",
      },
    },

    tooltip: {
      formatter: function () {
        return "hi%";
      },
    },

    series: [
      {
        name: "Male",
        data: [-2.2, -6.7, -3.4, -2.1, -2.2, -2.4, -3.2],
      },
      {
        name: "Female",
        data: [3.1, 2.9, 3.4, 4.3, 4.0, 3.1, 2.9],
      },
    ],
  },
};

export default BarChart;
