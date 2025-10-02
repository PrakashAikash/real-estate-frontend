import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const AiHubSEO = ({ propertyData }) => {
  const location = useLocation();
  const currentUrl = `https://www.mycityflat.in${location.pathname}`;

  // Structured Data for Property or AI Hub
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
    : {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "AI Property Hub",
        applicationCategory: "RealEstateApplication",
        description:
          "Analyze real estate trends and properties with AI-powered insights for Bangalore and other cities.",
        url: "https://www.mycityflat.in/ai-property-hub",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      };

  return (
    <>
      <Helmet>
        {/* Dynamic SEO Title */}
        <title>
          AI Property Hub | MyCityFlat - Smart Property Analysis in Bangalore
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Use AI Property Hub by MyCityFlat to analyze Bangalore real estate trends, compare properties, and make smart investment decisions with AI insights."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Bangalore apartments, AI property analysis, real estate trends, property investment, 1BHK, 2BHK, luxury flats Bangalore"
        />

        {/* Open Graph for Social Sharing */}
        <meta
          property="og:title"
          content="AI Property Hub | MyCityFlat - Real Estate Insights"
        />
        <meta
          property="og:description"
          content="Analyze Bangalore properties with AI-powered insights, compare prices, and make informed investment decisions with MyCityFlat's AI Property Hub."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.mycityflat.in/logo.png" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default AiHubSEO;
