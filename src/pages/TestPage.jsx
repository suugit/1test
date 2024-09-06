import React, { useEffect, useState } from 'react';

const TestPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log('Data from backend:', window.ENV.REACT_APP_TEST);
      })
      .catch(error => {
        setError('Error fetching data from backend');
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>API Test</h1>
      {error && <p>{error}</p>}
      {data && <p>Data received. Check console for details.</p>}
    </div>
  );
};

export default TestPage;