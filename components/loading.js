import React, { useState, useEffect } from 'react';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Simple loading message
  }

  if (!data) {
    return <div>Error loading data.</div>
  }

  return (
    <div>
      {data.message}
    </div>
  );
}

export default Loading;