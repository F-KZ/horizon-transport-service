
export const BACK_API = "https://d93a2273-3b8b-4f1e-98ed-b3c3fd7a39d5.eu-central-1.cloud.genez.io"
export const LOCAL_BACK = " http://localhost:3000"
export const PUBLIC_KEY_STRIPE = "pk_live_51QusZyL29Sc2AZsdrdazGdAxHruNw7Rj24hSpWTVpecLUHmToZwrkBUd3PFGWLCZaPULbYc0IixMNy2aUlp0TdQ000rb58wxCO"

// VAT calculation utility
export const calculatePriceWithVAT = (basePrice) => {
  const vatRate = 0.20; // 20% VAT
  return Math.round(basePrice * (1 + vatRate));
};

export const formatPrice = (price) => {
  return `${price}€`;
};

export const formatPriceWithVAT = (basePrice) => {
  const priceWithVAT = calculatePriceWithVAT(basePrice);
  return formatPrice(priceWithVAT);
};

export const downloadFiles = (url) => {
  const link = document.createElement('a')
  const fileName = url.split('/').pop()

 // link.download = "image.webp"
  link.href = url
  link.setAttribute('download', fileName)
  link.click()
}

export const PDF_VTC = "https://horizontransports.fr/Programme.pdf";
export const PDF_Taxi = "https://horizontransports.fr/Taxi.pdf";
export const PDF_FicheContact = "https://horizontransports.fr/FicheContact.pdf";

