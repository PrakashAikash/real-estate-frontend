import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Properties from '../components/propertiesshow';
import Companies from '../components/Companies';
import Features from '../components/Features';
import Steps from '../components/Steps';
import Testimonials from '../components/testimonial';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Best Apartments in Whitefield, Bangalore | YourWebsiteName</title>
        <meta name="description" content="Find premium 2BHK, 3BHK, and luxury apartments in Whitefield, Bangalore. Explore top properties with best prices and amenities." />
        <meta name="keywords" content="Whitefield apartments, Bangalore flats, 2BHK, 3BHK, premium apartments, buy apartment Whitefield, real estate Bangalore" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="YourWebsiteName" />
      </Helmet>

      {/* Page Components */}
      <Hero />
      <Properties />
      <Companies />
      <Features />
      <Steps />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;
