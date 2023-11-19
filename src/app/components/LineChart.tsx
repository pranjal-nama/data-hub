import React from 'react';
import { Line } from 'react-chartjs-2';
import { DataType } from '../utils/dataFetcher';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { format } from 'date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

interface LineChartProps {
  data: DataType[] | null;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  if (!data) {
    return <div>No data available.</div>;
  }

  const selectedCategoryData = data.map(item => item.A); 

  const chartData = {
    labels: data.map(item => format(new Date(item.Day), 'MM/dd/yyyy')),
    datasets: [
      {
        label: 'Category A Time Trend',
        data: selectedCategoryData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          parser: 'MM/dd/yyyy',
          tooltipFormat: 'll',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Time Spent',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
