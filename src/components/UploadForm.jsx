import React from 'react';

const UploadForm = () => {
  const onLoadFile = (event) => {
    console.log(event);
  };

  return (
    <form>
      <input type="file" onChange={onLoadFile} />
    </form>
  );
};

export default UploadForm;
