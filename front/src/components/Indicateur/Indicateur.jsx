import React from 'react';

const Indicateur = () => {
    return (
        <div
    data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false" className="flex justify-center items-center px-4 sm:pt-12 pb-9 sm:pb-0">
            <div className='flex flex-col flex-nowrap space-y-6 border-double border-4 border-sky-500 p-4 rounded-lg'>
            <h1 className='font-bold text-4xl tracking-wide'> Indicateurs de résultat à venir :</h1>
            <ul className='flex flex-col space-y-6 items-center'>
                <li>Taux de satisfaction : </li>
                <li>Taux de recommandation :</li>
                <li>Taux de réussite à l'examen Taxi :</li>
                <li>Taux de réussite à l'examen VTC :</li>
            </ul>

            </div>
        </div>
    );
}

export default Indicateur;
