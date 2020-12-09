import React, { useState } from 'react';

const UploadForm = () => {
  const [stateFile, setStateFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const onLoadFile = (event) => {
    const [file] = event.target.files;

    if (file && types.includes(file.type)) {
      setStateFile(file);
      if (error) {
        setError(null);
      }
    } else {
      setStateFile(null);
      setError('Please select a valid image file');
    }
  };

  return (
    <form>
      <label htmlFor="upload">
        <input type="file" accept="image/*" onChange={onLoadFile} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {stateFile && <div>{stateFile.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
