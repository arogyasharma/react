import React, { useState, useEffect } from 'react';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Window Width: {width}px</h2>
    </div>
  );
}

export default WindowWidth;
