import React, { useEffect } from 'react';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Home from '..//../App'
import Navbar2 from '../Navbar/Navbar2';
import ScrollToTop from '../ScrollToTop';

export const Politique = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 right-0 z-50'>
                <Navbar2 />
            </div>
            <div className='gap-20 flex flex-col items-center p-10 mt-20'>
                <h1>Politique de confidentialité</h1>

                <div>
                    <h2>Introduction</h2>

                    <p>Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière à la protection de la vie privée. C'est pourquoi, nous nous engageons à respecter la confidentialité des renseignements personnels que nous collectons.
                    </p>
                </div>

                <div>
                    <h2>Collecte des renseignements personnels</h2>

                    <p>
                        Prénom
                        Adresse électronique
                        Les renseignements personnels que nous collectons sont recueillis au travers de formulaires et grâce à l'interactivité établie entre vous et notre site Web. Nous utilisons également, comme indiqué dans la section suivante, des fichiers témoins et/ou journaux pour réunir des informations vous concernant.
                    </p>
                </div>

                <div>
                    <h2>Formulaires et interactivité</h2>

                    <p>
                        Vos renseignements personnels sont collectés par le biais de formulaire, à savoir :

                        Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :

                        Informations / Offres promotionnelles
                        Statistiques
                        Contact
                        Vos renseignements sont également collectés par le biais de l'interactivité pouvant s'établir entre vous et notre site Web et ce, de la façon suivante:

                        Correspondance
                        Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :

                        Informations ou pour des offres promotionnelles
                        Statistiques
                        Contact
                    </p>
                </div>

                <div>
                    <h2>Droit d'opposition et de retrait</h2>

                    <p>
                        Nous nous engageons à vous offrir un droit d'opposition et de retrait quant à vos renseignements personnels.

                        Le droit d'opposition s'entend comme étant la possiblité offerte aux internautes de refuser que leurs renseignements personnels soient utilisées à certaines fins mentionnées lors de la collecte.

                        Le droit de retrait s'entend comme étant la possiblité offerte aux internautes de demander à ce que leurs renseignements personnels ne figurent plus, par exemple, dans une liste de diffusion.
                    </p>
                </div>

                <div>
                    <h2>Pour pouvoir exercer ces droits, vous pouvez :</h2>

                    <p>
                        Code postal :  76140

                        Courriel :  contact@horizontransports.fr

                        Téléphone : +33 7 69 98 98 85

                        Section du site web :   https://horizontransports.fr
                    </p>
                </div>

                <div>
                    <h2>Droit d'accès</h2>

                    <p>Nous nous engageons à reconnaître un droit d'accès et de rectification aux personnes concernées désireuses de consulter, modifier, voire radier les informations les concernant.
                    </p>

                    <p>L'exercice de ce droit se fera :</p>

                    <p>
                        Code postal :  76140

                        Courriel :  contact@horizontransports.fr

                        Téléphone :  +33 7 69 98 98 85

                        Section du site web :   https://horizontransports.fr
                    </p>
                </div>

                <div>
                    <h2>Sécurité</h2>

                    <p>
                        Les renseignements personnels que nous collectons sont conservés dans un environnement sécurisé. Les personnes travaillant pour nous sont tenues de respecter la confidentialité de vos informations.

                        Pour assurer la sécurité de vos renseignements personnels, nous avons recours aux mesures suivantes :

                        Protocole SSL
                        Pare-feu
                        Nous nous engageons à maintenir un haut degré de confidentialité en intégrant les dernières innovations technologiques permettant d'assurer la confidentialité de vos transactions. Toutefois, comme aucun mécanisme n'offre une sécurité maximale, une part de risque est toujours présente lorsque l'on utilise Internet pour transmettre des renseignements personnels.
                    </p>
                </div>

                <div>
                    <h2>Législation</h2>

                    <p>
                        Nous nous engageons à respecter les dispositions législatives énoncées dans :

                        Législation: française
                    </p>
                </div>
                <Link to='/'>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
                        Retour à l'accueil
                    </button>
                </Link>
            </div>
            <ScrollToTop />
        </div>
    );
}

export default Politique;
