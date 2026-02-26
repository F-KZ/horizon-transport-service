import React from 'react'
import { PDF_CERTIFICAT } from '../utils/constant';

function Certificat() {
  return (
    <div>
       <p
        onClick={() => window.open(PDF_CERTIFICAT, '_blank', 'noopener,noreferrer')}
        className='cursor-pointer'
      >
        Certificat Qualiopi
      </p>
    </div>
  )
}

export default Certificat
