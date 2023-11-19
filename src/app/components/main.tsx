// components/Main.tsx

import React from 'react';
import { DataType } from '../utils/dataFetcher';
import BarChart from './BarChart';
import LineChart from './LineChart';

interface MainProps {
  data: DataType[] | null;
}

const Main: React.FC<MainProps> = ({ data }) => {
  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
    {data && (
      <div className="grid grid-cols-2 gap-6">
        <BarChart data={data} />
        <LineChart data={data} />
      </div>
    )}
  </div>
  );
};

export default Main;
