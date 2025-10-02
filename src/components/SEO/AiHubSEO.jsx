import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, keywords, propertyData }) => {
  const location = useLocation();
  const currentUrl = `https://www.mycityflat.in${location.pathname}`;

  // Structured Data for Property
  const structuredData = propertyData
    ? {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        name: propertyData.title,
        description: propertyData.description,
        url: currentUrl,
        datePosted: propertyData.createdAt || new Date().toISOString(),
        address: {
          "@type": "PostalAddress",
          addressLocality: propertyData.location || "Bangalore",
          addressRegion: propertyData.region || "Karnataka",
          addressCountry: "IN",
        },
        price: propertyData.price ? `₹${propertyData.price}` : "",
        floorSize: {
          "@type": "QuantitativeValue",
          unitText: "SQFT",
          value: propertyData.sqft || "",
        },
        numberOfRooms: propertyData.beds || "",
        numberOfBathroomsTotal: propertyData.baths || "",
      }
    : null;

  return (
    <>
      <Helmet>
        {/* Dynamic Title */}
        <title>
          {title ||
            `Find Best Apartments in Bangalore | MyCityFlat - Trusted Real Estate`}
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content={
            description ||
            "Search and discover premium apartments in Bangalore. Find 1BHK, 2BHK, and luxury flats with verified listings, location insights, and real-time property updates."
          }
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content={
            keywords ||
            "Bangalore apartments, flats for rent Bangalore, 1BHK, 2BHK, luxury flats, property listing Bangalore, verified properties"
          }
        />

        {/* Social Sharing / Open Graph */}
        <meta property="og:title" content={title || "MyCityFlat - Apartments in Bangalore"} />
        <meta
          property="og:description"
          content={
            description ||
            "Search premium apartments in Bangalore with MyCityFlat. Verified properties, location insights, and smart investment options."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.mycityflat.in/logo.png" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </>
  );
};

export default SEO;
