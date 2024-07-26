'use client';

import React, { useState, useEffect } from 'react';

interface DataItem {
  Category: string;
  "Expiry Date/Last Maintenance": string; // Date string
  "Item ID": string;
  Location: string;
  "Manufacturing Date": string; // Date string
  Name: string;
  Notes: string;
  Quantity: string; // Quantity as a string
  Status: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://waterapi-xdy7.onrender.com/fetch');

      if (!response.ok) {
        const errorText = await response.text(); // Get the error message from the response
        throw new Error(`API fetch failed: ${response.statusText} - ${errorText}`);
      }

      const apiData: DataItem[] = await response.json();
      setData(apiData);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching data:', error.message);
        setError(`Failed to fetch data: ${error.message}`);
      } else {
        console.error('Unexpected error:', error);
        setError('Failed to fetch data due to an unexpected error.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Data Table</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Item ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Manufacturing Date</th>
            <th>Expiry Date/Last Maintenance</th>
            <th>Location</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item["Item ID"]}>
              <td>{item.Category}</td>
              <td>{item["Item ID"]}</td>
              <td>{item.Name}</td>
              <td>{item.Quantity}</td>
              <td>{item["Manufacturing Date"]}</td>
              <td>{item["Expiry Date/Last Maintenance"]}</td>
              <td>{item.Location}</td>
              <td>{item.Status}</td>
              <td>{item.Notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
