import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, onComplete }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      onComplete(null);
    }
  }, [url, onComplete]);

  return (
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
    //
  );
};

export default ProgressBar;
