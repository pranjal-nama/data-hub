// layout.tsx

"use client"; 

import React from 'react';
import fetchData, { DataType } from './utils/dataFetcher';
import Main from './components/main';

const Layout: React.FC = () => {
  const [data, setData] = React.useState<DataType[] | null>(() => null); // Initialize state using a function

  React.useEffect(() => {
    const fetchDataForMain = async () => {
      try {
        const fetchedData = await fetchData();
        if (fetchedData) {
          setData(fetchedData);
        } else {
          console.error('Fetched data is empty');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataForMain();
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Main data={data} />
      </body>
    </html>
  );
};

export default Layout;
