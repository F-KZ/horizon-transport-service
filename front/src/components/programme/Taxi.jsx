import React from 'react';

const PDF_URL = "https://horizontransports.fr/Taxi.pdf";

const Taxi = () => {
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
      <p onClick={() => { downloadFiles(PDF_URL) }} className='cursor-pointer'>Programme Taxi</p>
    </div>
  );
};

export default Taxi;
