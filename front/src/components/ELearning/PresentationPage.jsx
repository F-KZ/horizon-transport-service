import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar2 from '../Navbar/Navbar2';
import ScrollToTop from '../ScrollToTop';
import { rncp } from '../utils/rncp';

const PresentationPage = () => {
  const { id } = useParams();
  const courseId = Number(id);
  const course = rncp.find((c) => c.id === courseId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar2 />
        </div>
        <div className="pt-24 px-4 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Formation introuvable</h1>
          <p className="text-gray-400 mb-6">
            La formation que vous recherchez n'existe pas ou plus.
          </p>
          <Link
            to="/e-learning"
            className="inline-block bg-[#FFC727] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#FFC727]/90"
          >
            Retour aux cours e-learning
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-5xl mx-auto pt-8 grid gap-10 lg:grid-cols-[2fr,1.5fr]">
          {/* Colonne gauche : contenu */}
          <div>
            <p className="text-sm sm:text-xs font-medium text-[#FFC727] uppercase tracking-wide mb-2">
              {course.niveau}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {course.name}
            </h1>
            <p className="text-gray-300 mb-6 text-lg sm:text-base leading-relaxed">
              {course.description}
            </p>

            {/* Points forts */}
            <div className="grid gap-3 sm:grid-cols-3 mb-8">
              <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                <p className="text-base sm:text-sm font-semibold text-white">100% en ligne</p>
                <p className="text-sm sm:text-xs text-gray-400 mt-1">
                  Accès 24/7, avancez à votre rythme.
                </p>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                <p className="text-base sm:text-sm font-semibold text-white">Accompagnement</p>
                <p className="text-sm sm:text-xs text-gray-400 mt-1">
                  Suivi pédagogique et évaluations régulières.
                </p>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                <p className="text-base sm:text-sm font-semibold text-white">Certification RNCP</p>
                <p className="text-sm sm:text-xs text-gray-400 mt-1">
                  Préparation à l'examen du titre.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">Objectifs de la formation</h2>
                <ul className="list-disc list-inside text-gray-300 text-base sm:text-sm space-y-1">
                  <li>Acquérir les compétences clés du métier visé.</li>
                  <li>Valider un titre professionnel inscrit au RNCP.</li>
                  <li>Développer des savoir-faire immédiatement opérationnels.</li>
                  <li>Être prêt(e) pour un poste ou une évolution professionnelle dès la fin du parcours.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">Ce que vous allez apprendre</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 text-base sm:text-sm text-gray-300">
                    <p className="font-semibold text-white mb-1">Compétences métier</p>
                    <p className="text-gray-400 text-base sm:text-sm">
                      Méthodes, outils et bonnes pratiques adaptés au poste visé.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 text-base sm:text-sm text-gray-300">
                    <p className="font-semibold text-white mb-1">Mise en situation</p>
                    <p className="text-gray-400 text-base sm:text-sm">
                      Exercices, études de cas et évaluations pour progresser rapidement.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">Programme (exemple de modules)</h2>
                <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                  <ul className="text-base sm:text-sm text-gray-300 space-y-2">
                    <li><span className="text-white font-semibold">Module 1 :</span> Fondamentaux du métier & environnement professionnel</li>
                    <li><span className="text-white font-semibold">Module 2 :</span> Organisation, outils et méthodes opérationnelles</li>
                    <li><span className="text-white font-semibold">Module 3 :</span> Communication, qualité de service & relation client</li>
                    <li><span className="text-white font-semibold">Module 4 :</span> Exercices guidés, cas pratiques & évaluations</li>
                    <li><span className="text-white font-semibold">Module 5 :</span> Préparation à l’examen RNCP (simulation, conseils, révisions)</li>
                  </ul>
                  <p className="text-sm sm:text-xs text-gray-400 mt-3">
                    Le programme exact peut varier selon la certification et votre niveau initial.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">Public & prérequis</h2>
                <p className="text-gray-300 text-base sm:text-sm">
                  Formation accessible aux salariés, demandeurs d'emploi et indépendants souhaitant
                  évoluer ou se reconvertir sur ce métier. Un niveau de français suffisant à la
                  compréhension écrite et orale est recommandé.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">Modalités</h2>
                <p className="text-gray-300 text-base sm:text-sm">
                  Formation e-learning avec accompagnement, modules interactifs, évaluations
                  régulières et préparation à l'examen du titre professionnel.
                </p>
              </section>

              <section>
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">Financement</h2>
                <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 text-base sm:text-sm text-gray-300 space-y-2">
                  <p className="text-gray-400">
                    Selon votre situation, la formation peut être financée (totalement ou partiellement) via :
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>CPF</li>
                    <li>OPCO / plan de développement des compétences</li>
                    <li>Pôle emploi / dispositifs régionaux (selon éligibilité)</li>
                  </ul>
                  <p className="text-sm sm:text-xs text-gray-500">
                    Nous vous accompagnons dans la constitution de votre dossier.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl sm:text-xl font-semibold mb-2">FAQ</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                    <p className="font-semibold text-white text-base sm:text-sm">Combien de temps dure la formation ?</p>
                    <p className="text-base sm:text-sm text-gray-400 mt-1">
                      Vous avancez à votre rythme. Une estimation et un planning peuvent être proposés à l’inscription.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                    <p className="font-semibold text-white text-base sm:text-sm">Y a-t-il un suivi ?</p>
                    <p className="text-base sm:text-sm text-gray-400 mt-1">
                      Oui : accompagnement, évaluations, et préparation à l’examen RNCP.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
                    <p className="font-semibold text-white text-base sm:text-sm">Puis-je commencer rapidement ?</p>
                    <p className="text-base sm:text-sm text-gray-400 mt-1">
                      Une fois l’inscription validée et le financement confirmé, l’accès peut être ouvert rapidement.
                    </p>
                  </div>
                </div>
              </section>

              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  to="/e-learning"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-600 text-base sm:text-sm text-gray-200 hover:bg-gray-800"
                >
                  ← Retour aux cours
                </Link>
                <Link
                  to="/formules"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#FFC727] text-black text-base sm:text-sm font-semibold hover:bg-[#FFC727]/90"
                >
                  Demander des informations / financement
                </Link>
              </div>
            </div>
          </div>

          {/* Colonne droite : visuel */}
          <aside className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900">
              <div className="bg-gray-800 flex items-center justify-center max-h-56 sm:max-h-none">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full max-h-56 sm:max-h-none object-cover sm:aspect-video"
                />
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 text-base sm:text-sm text-gray-300 space-y-3">
              <p><span className="font-semibold text-white">Niveau :</span> {course.niveau}</p>
              <p>
                <span className="font-semibold text-white">Certification :</span>{' '}
                Titre professionnel inscrit au RNCP.
              </p>
              <p>
                <span className="font-semibold text-white">Format :</span> e-learning + accompagnement.
              </p>
              <p>
                <span className="font-semibold text-white">Accès :</span> 24/7, sur mobile & ordinateur.
              </p>
              <div className="pt-2 grid gap-2">
                <Link
                  to="/formules"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#FFC727] text-black text-base sm:text-sm font-semibold hover:bg-[#FFC727]/90"
                >
                  Je veux être rappelé(e)
                </Link>
                <Link
                  to="/e-learning"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-600 text-base sm:text-sm text-gray-200 hover:bg-gray-800"
                >
                  Voir toutes les formations
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
              <p className="text-base sm:text-sm font-semibold text-white">Pourquoi choisir Horizon ?</p>
              <ul className="mt-2 text-base sm:text-sm text-gray-400 space-y-1">
                <li>• Parcours structuré, clair et progressif</li>
                <li>• Évaluations pour valider vos acquis</li>
                <li>• Accompagnement administratif sur le financement</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default PresentationPage;
