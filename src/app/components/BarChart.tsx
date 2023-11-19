import React from 'react';
import { Bar } from 'react-chartjs-2';
import { DataType } from '../utils/dataFetcher';

interface BarChartProps {
  data: DataType[] | null;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const features = ['A', 'B', 'C', 'D', 'E', 'F'];

  const totalTimeSpent = features.map((feature) =>
    data
      ? data.reduce((total, item) => total + item[feature], 0)
      : 0
  );

  const chartData = {
    labels: features,
    datasets: [
      {
        label: 'Total Time Spent',
        data: totalTimeSpent,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    categoryPercentage: 0.2,
    barPercentage: 1,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 25,
          min: 0,
          max: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 50,
        },
        onClick: null,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
