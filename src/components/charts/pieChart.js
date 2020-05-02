import React from "react";
import HighCharts from "highcharts";
import HighChartsReact from "highcharts-react-official";
// lib
import regionsStats from '../data/regions'

const PieChart = ({ chartOptions }) => {
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

PieChart.defaultProps = {
  cardTitle: "Nothing made yet",

  cardSubTextBackgroundColor: "orange",
};

export default PieChart;
