import React, { useEffect } from 'react';
import Footer from './Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Home from '..//../App'
import Navbar2 from '../Navbar/Navbar2';
import ScrollToTop from '../ScrollToTop';

export const Mentions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 right-0 z-50'>
                <Navbar2 />
            </div>
            <div className='gap-20 flex flex-col items-center p-10 mt-20'>
                <h1>Mentions Légales</h1>
                <div>
                    <p>Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : horizontransports.fr les informations suivantes :
                    </p>
                </div>
                <div>
                    <h2>ÉDITEUR</h2>
                    <p>
                        Le site horizontransports.fr/ est la propriété exclusive de SASU HORIZON TRANSPORTS, qui l'édite.
                        HORIZON TRANSPORTS 
                        SASU au capital de 10 000 €
                        Tél  : +33 7 69 98 98 85
                        17 RUE EMILE MALETRA 76140 PETIT-QUEVILLY
                        Immatriculée au Registre du Commerce et des Sociétés de  Rouen B 914 063 870 sous le numéro 981 455 991 00019 
                        Numéro TVA  : FR12981455991
                        Adresse de courrier électronique : contact@horizontransports.fr
                        Directeur de la  publication : Victoire Okouya
                        Contactez le responsable de la publication : v.okouya@horizontransports.fr
                    </p>
                </div>
                <div>
                    <h2>HÉBERGEMENT</h2>
                    <p>
                        Le site est hébergé par IONOS,  7 PL DE LA GARE 57200 SARREGUEMINES.
                        CREDITS : les mentions légales ont étés générées par mentions légales
                    </p>
                </div>
                <div>
                    <h2>DESCRIPTION DES SERVICES FOURNIS</h2>
                    <p>La page horizontransports.fr/ du site horizontransports.fr/politique-de-confidentialite a pour objet de fournir une information concernant l'ensemble des activités de la société. Le propriétaire du site s'efforce de fournir sur la page horizontransports.fr/politique-de-confidentialite des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Tous les informations proposées sur la page horizontransports.fr/politique-de-confidentialite sont données à titre indicatif, sont non exhaustives, et sont susceptibles d'évoluer. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne.  
                    </p>
                </div>
                <div>
                    <h2>PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS</h2>
                    <p>Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels… Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable à l'email : contact@horizontransports.fr . Toute exploitation non autorisée du site ou de l'un quelconque de ces éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.  
                    </p>
                </div>
                <div>
                    <h2>LIENS HYPERTEXTES ET COOKIES</h2>
                    <p>Le site horizontransports.fr contient un certain nombre de liens hypertextes vers d'autres sites (partenaires, informations …) mis en place avec l'autorisation de le propriétaire du site . Cependant, le propriétaire du site n'a pas la possibilité de vérifier le contenu des sites ainsi visités  et décline donc toute responsabilité de ce fait quand aux risques éventuels de contenus illicites. L'utilisateur est informé que lors de ses visites sur le site horizontransports.fr , un ou des cookies sont susceptible de s'installer automatiquement sur son ordinateur. Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre des informations relatives à la navigation d'un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation. Le paramétrage du logiciel de navigation permet d'informer de la présence de cookie et éventuellement, de refuser de la manière décrite à l'adresse suivante : www.cnil.fr Le refus d'installation d'un cookie peut entraîner l'impossibilité d'accéder à certains services. L'utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l'installation des cookies : Sous Internet Explorer : onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok. Sous Netscape : onglet édition / préférences. Cliquez sur Avancées et choisissez Désactiver les cookies. Validez sur Ok.  
                    </p>
                </div>
                <div>
                    <h2>PROTECTION DES BIENS ET DES PERSONNES – GESTION DES DONNÉES PERSONNELLES</h2>
                    <p>
                        Utilisateur : Internaute se connectant, utilisant le site susnommé : horizontransports.fr. En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                        Sur le site horizontransports.fr, le propriétaire du site ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site horizontransports.fr. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site horizontransports.fr l'obligation ou non de fournir ces informations. Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles le concernant. Pour l'exercer, adressez votre demande à horizontransports.fr par email : email du webmaster ou  en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
                        Aucune information personnelle de l'utilisateur du site horizontransports.fr n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat du site horizontransports.fr à le propriétaire du site et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site horizontransports.fr.
                        Le site horizontransports.fr est en conformité avec le RGPD voir notre politique RGPD  Politique de confidentialité.
                        Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
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

export default Mentions;
