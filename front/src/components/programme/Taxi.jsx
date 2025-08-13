import React from 'react';
import { downloadFiles } from '../utils/constant';
import { PDF_Taxi } from '../utils/constant';



const Taxi = () => {
  
  return (
    <div>
      <p onClick={() => { downloadFiles(PDF_Taxi) }} className='cursor-pointer'>Programme Taxi</p>
    </div>
  );
};

export default Taxi;
