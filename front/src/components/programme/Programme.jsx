

import React from 'react';
import { PDF_VTC } from '../utils/constant';
import { downloadFiles } from '../utils/constant';




const Programme = () => {
  return (
    <div>
      <p onClick={() => { downloadFiles(PDF_VTC) }} className='cursor-pointer'>Programme VTC</p>
    </div>
  );
};

export default Programme;
