const logoRncp = 'https://www.rncp.fr/wp-content/uploads/2021/03/logo-rncp-1.png';
import commercial from "../../assets/RNCP/1.webp"
import direction from "../../assets/RNCP/2.webp"
import vieauxfamilles from "../../assets/RNCP/3.webp"
import rh from "../../assets/RNCP/4.webp"
import accueiltouristique from "../../assets/RNCP/5.webp"
import conseillerinsertion from "../../assets/RNCP/6.webp"
import employecommercial from "../../assets/RNCP/7.webp"
import formateuradultes from "../../assets/RNCP/8.webp"
import gestionnairecomptable from "../../assets/RNCP/9.webp"
import gestionnairepaie from "../../assets/RNCP/10.webp"
import manageruniteMarchande from "../../assets/RNCP/11.webp"
import managerequiperelationclient from "../../assets/RNCP/12.webp"
import negociateurtechnicocommercial from "../../assets/RNCP/13.webp"
import responsablesctructuretouristique from "../../assets/RNCP/14.webp"
import secretaireassistant from "../../assets/RNCP/16.webp"
import secretaireassistantmedicoadministratif from "../../assets/RNCP/15.webp"
import secretaireassistantmedicosocial from "../../assets/RNCP/17.webp"
//import secretairecomptable from "../../assets/RNCP/19.webp"

export const rncp = [
  { id: 1, name: 'Assistant(e) Commercial(e)', niveau: 'RNCP 41254 – Niveau V', description: 'Accueil client, prospection et support commercial en point de vente.', image: commercial, logo: logoRncp },
  { id: 2, name: 'Assistant(e) de Direction', niveau: 'RNCP 38667 – Niveau V', description: 'Soutien opérationnel et administratif au dirigeant et à l’équipe.', image: direction, logo: logoRncp },
  { id: 3, name: 'Assistant(e) de Vie aux Familles', niveau: 'RNCP 37715 – Niveau III', description: 'Accompagnement du quotidien à domicile : aide aux familles et aux personnes fragilisées.', image: vieauxfamilles, logo: logoRncp },
  { id: 4, name: 'Assistant(e) Ressources Humaines', niveau: 'RNCP 41366 – Niveau V', description: 'Gestion administrative du personnel, paie, recrutement et suivi des dossiers RH.', image: rh, logo: logoRncp },
  { id: 5, name: 'Chargé(e) d’Accueil Touristique et de Loisirs', niveau: 'RNCP 39318', description: 'Accueil, information et animation dans les structures touristiques et de loisirs.', image: accueiltouristique, logo: logoRncp },
  { id: 7, name: 'Conseiller en insertion professionnelle', niveau: 'RNCP 37274 – Niveau III', description: 'Accompagnement des demandeurs d’emploi vers l’insertion et l’emploi durable.', image: conseillerinsertion, logo: logoRncp },
  { id: 8, name: 'Employé Commercial en Unité Marchande', niveau: 'RNCP 37099 – Niveau III', description: 'Mise en rayon, vente et gestion des stocks en grande distribution.', image: employecommercial, logo: logoRncp },
  { id: 9, name: 'Formateur pour Adultes', niveau: 'RNCP 37275 – Niveau V', description: 'Conception et animation de formations professionnelles pour un public adulte.', image: formateuradultes, logo: logoRncp },
  { id: 10, name: 'Gestionnaire comptable et fiscal', niveau: 'RNCP 37949 – Niveau V', description: 'Tenue de la comptabilité et préparation des déclarations fiscales de l’entreprise.', image: gestionnairecomptable, logo: logoRncp },
  { id: 11, name: 'Gestionnaire de Paie', niveau: 'RNCP 37948 – Niveau V', description: 'Établissement des bulletins de paie et suivi des obligations sociales.', image: gestionnairepaie, logo: logoRncp },
  { id: 12, name: 'Manager d’Unité Marchande', niveau: 'RNCP 38676', description: 'Pilotage d’une unité commerciale : équipe, objectifs et performance.', image: manageruniteMarchande, logo: logoRncp },
  { id: 13, name: 'Manager d’équipe relation client à distance', niveau: 'RNCP', description: 'Encadrement d’une équipe en centre d’appels ou relation client à distance.', image: managerequiperelationclient, logo: logoRncp },
  { id: 14, name: 'Négociateur Technico-Commercial', niveau: 'RNCP 39063 – Niveau V', description: 'Vente de solutions techniques et commerciales auprès des professionnels.', image: negociateurtechnicocommercial, logo: logoRncp },
  { id: 15, name: 'Responsable de Structure Touristique', niveau: 'RNCP 35527 – RNCP 40800', description: 'Direction et développement d’une structure d’hébergement ou de loisirs.', image: responsablesctructuretouristique, logo: logoRncp },
  { id: 16, name: 'Secrétaire Assistant(e)', niveau: 'RNCP 38604 – Niveau IV', description: 'Secrétariat, organisation et communication au sein d’un service ou d’une direction.', image: secretaireassistant, logo: logoRncp },
  { id: 17, name: 'Secrétaire Assistant Médico-Administrative', niveau: 'RNCP 40800', description: 'Accueil, gestion des dossiers patients et tâches administratives en cabinet ou structure de santé.', image: secretaireassistantmedicoadministratif, logo: logoRncp },
  { id: 18, name: 'Secrétaire Assistant Médico-Social', niveau: 'RNCP 36805 – Niveau IV', description: 'Support administratif et accueil dans les structures médico-sociales et sociales.', image: secretaireassistantmedicosocial, logo: logoRncp },
 // { id: 19, name: 'Secrétaire Comptable', niveau: 'RNCP 37123 – Niveau IV', description: 'Traitement des écritures comptables et suivi des opérations courantes.', image: secretairecomptable, logo: logoRncp },
];
