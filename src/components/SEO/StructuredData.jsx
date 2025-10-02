import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
  const location = useLocation();
  const currentUrl = `https://www.mycityflat.in${location.pathname}`;

  // Default values for SEO if data missing
  const title = data?.title || "Premium Apartments & Properties in Bangalore | MyCityFlat";
  const description = data?.description || "Find the best apartments, villas, and houses in Bangalore with MyCityFlat. Explore verified listings, prices, and location insights for smarter real estate decisions.";
  const keywords = data?.keywords || "Bangalore apartments, Bangalore villas, Bangalore houses, real estate Bangalore, property investment Bangalore";

  // Schema.org structured data
  const schemas = {
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MyCityFlat',
      url: 'https://www.mycityflat.in/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.mycityflat.in/properties?location={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MyCityFlat',
      url: 'https://www.mycityflat.in/',
      logo: 'https://www.mycityflat.in/logo.png',
      sameAs: [
        'https://github.com/PrakashAikash',
        'https://www.linkedin.com/in/prakash-kumar-sahni-ba541b236/'
      ]
    },
    property: {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: title,
      description: description,
      url: currentUrl,
      datePosted: data?.createdAt || new Date().toISOString(),
      address: {
        '@type': 'PostalAddress',
        addressLocality: data?.location || 'Bangalore',
        addressRegion: 'KA',
        addressCountry: 'IN'
      },
      price: data?.price ? `₹${data.price}` : '',
      floorSize: {
        '@type': 'QuantitativeValue',
        unitText: 'SQFT',
        value: data?.sqft || ''
      },
      numberOfRooms: data?.beds || '',
      numberOfBathroomsTotal: data?.baths || ''
    },
    aiHub: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'AI Property Hub',
      applicationCategory: 'RealEstateApplication',
      description: 'AI-powered property insights and investment analysis.',
      url: 'https://www.mycityflat.in/ai-property-hub',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
      }
    }
  };

  const schemaData = schemas[type] || schemas.website;

  return (
    <>
      {/* Structured data for Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Dynamic SEO meta tags */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph for social media */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://www.mycityflat.in/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.mycityflat.in/logo.png" />
      </Helmet>
    </>
  );
};

StructuredData.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object
};

export default StructuredData;
