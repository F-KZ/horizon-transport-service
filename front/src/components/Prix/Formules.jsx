import React from 'react'
import { Link } from 'react-router-dom'

const Formules = () => {
  return (
    <div className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Nos Formules de Formation</h2>
          <p className="text-gray-300">Découvrez nos différentes formules adaptées à vos besoins</p>
        </div>
        
        <div className="flex justify-center">
          <Link to="/formules">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
              Voir toutes nos formules
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Formules
