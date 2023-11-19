// pages/index.tsx

import React, { useEffect, useState } from 'react';
import fetchData, {DataType} from '@/app/utils/dataFetcher';
import Main from '@/app/components/main';

const Home: React.FC = () => {
  const [data, setData] = useState<DataType[] | null>(null);

  useEffect(() => {
    const fetchDataForMain = async () => {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null);
      }
    };
    fetchDataForMain();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Main data={data} />
    </div>
  );
};

export default Home;
