

import React from 'react';

const PDF_URL = "https://horizontransports.fr/Programme.pdf";

const Programme = () => {
  const downloadFiles = (url) => {
    const link = document.createElement('a')
    const fileName = url.split('/').pop()

   // link.download = "image.webp"
    link.href = url
    link.setAttribute('download', fileName)
    link.click()
  }
  

  return (
    <div>
      <p onClick={() => { downloadFiles(PDF_URL) }} className='cursor-pointer'>Programme VTC</p>
    </div>
  );
};

export default Programme;
