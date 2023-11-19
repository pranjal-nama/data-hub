// utils/dataFetcher.ts

export interface DataType {
    Day: string;
    Age: '15-25' | '>25';
    Gender: 'Male' | 'Female';
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
    F: number;
  }

  const demoData: DataType[] = [
    {
      Day: '4/10/2022',
      Age: '15-25',
      Gender: 'Male',
      A: 141,
      B: 983,
      C: 169,
      D: 123,
      E: 791,
      F: 592,
    },
    {
        Day: '4/10/2022',
        Age: '15-25',
        Gender: 'Male',
        A: 141,
        B: 983,
        C: 169,
        D: 123,
        E: 791,
        F: 592,
      },
      {
        Day: '4/10/2022',
        Age: '15-25',
        Gender: 'Male',
        A: 141,
        B: 983,
        C: 169,
        D: 123,
        E: 791,
        F: 592,
      },
    // Add more simulated data as needed...
  ];
  
  
  const fetchData = async (): Promise<DataType[] | null> => {
    try {
    //   const response = await fetch('https://docs.google.com/spreadsheets/d/1l7GstWHc69HPV0irSdvoMIyHgtufUPKsbtCiNw7IKR0');
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }
    //   const data = await response.json() as DataType[];
      return demoData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default fetchData;
  