import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, url, image, keywords }) => {
  const defaultSEO = {
    title: "Horizon-Transports - Formation VTC et Taxi" || title,
    description: "Apprenez à devenir chauffeur VTC et Taxi avec nos formations de qualité." || description,
    url: "https://www.horizon-transports.com" ||  url ,
    keywords: keywords || "formation taxi rouen, formation vtc rouen, vtc, taxi, horizon transports",
    image: image || "https://www.horizon-transports.com/images/profile.webp",
  };

  return (
    <Helmet>
      <title>{defaultSEO.title}</title>
      <meta name="description" content={defaultSEO.description} />
      <meta name="keywords" content={defaultSEO.keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={defaultSEO.url} />


      <meta property="og:title" content={defaultSEO.title} />
      <meta property="og:description" content={defaultSEO.description} />
      <meta property="og:url" content={defaultSEO.url} />
      <meta property="og:image" content={defaultSEO.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultSEO.title} />
      <meta name="twitter:description" content={defaultSEO.description} />
      <meta name="twitter:image" content={defaultSEO.image} />
    </Helmet>
  );
};

export default Seo;
