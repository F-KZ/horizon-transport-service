import React from 'react';

const Prix = () => {
    return (
        <>
        <div
    data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false" className="flex justify-center items-center px-4 sm:pt-12 pb-9 sm:pb-2">
            <div className='flex flex-col items-center flex-nowrap space-y-6 border-double border-4 border-sky-500 p-4 rounded-lg'>
            <h1 className='font-bold text-4xl tracking-wide'> Tarif Unique</h1>
            <span>2 449,00€</span>
            <ul className='flex flex-col space-y-6 items-center'>
            <li>Inclus</li>
                <li>Formation théorique VTC ou Taxi.</li>
                <li>Formation pratique examen VTC ou Taxi.</li>
                <li>Mise à disposition du véhicule équipé le jour de l’examen pratique.</li>
                <li>Et en plus, paiement formalités administratives.</li>
            </ul>

            </div>
           
        </div>
<div id='info'></div>
        </>
        
    );
}

export default Prix;
