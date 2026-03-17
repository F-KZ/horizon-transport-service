import React, { useEffect, useMemo, useState } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import ScrollToTop from '../ScrollToTop';
import { rncp } from '../utils/rncp';
import ElearningCard from './ElearningCard';

const ElearningPage = () => {
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedCourse = useMemo(() => {
    const id = Number(selectedId);
    if (!id) return null;
    return rncp.find((c) => c.id === id) || null;
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto pt-8">
          {/* En-tête */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Nos cours e-learning
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Formations certifiantes RNCP accessibles en ligne. Choisissez un parcours pour découvrir le programme et vous inscrire.
            </p>
          </header>

          {/* Liste déroulante des formations (mobile uniquement) */}
          <section className="max-w-xl mx-auto sm:hidden">
            <label className="block text-sm text-gray-300 mb-2">
              Choisir une formation
            </label>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC727]"
            >
              <option value="">-- Sélectionner --</option>
              {rncp.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </section>

          {/* Card de la formation sélectionnée (mobile uniquement) */}
          <section className="mt-8 max-w-md mx-auto sm:hidden">
            {selectedCourse ? (
              <ElearningCard
                id={selectedCourse.id}
                name={selectedCourse.name}
                description={selectedCourse.description}
                niveau={selectedCourse.niveau}
                image={selectedCourse.image}
              />
            ) : (
              <p className="text-center text-gray-500 text-sm">
                Sélectionne une formation pour afficher la fiche détaillée.
              </p>
            )}
          </section>

          {/* Grille des cours (tablette / desktop) */}
          <section className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rncp.map((course) => (
              <ElearningCard
                key={course.id}
                id={course.id}
                name={course.name}
                description={course.description}
                niveau={course.niveau}
                image={course.image}
              />
            ))}
          </section>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default ElearningPage;
