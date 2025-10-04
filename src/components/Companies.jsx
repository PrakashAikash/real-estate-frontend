import { logos } from '../assets/logo';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Star, Users, Award } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6
    }
  }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25
    }
  }
};

const floatingAnimation = {
  y: [-2, 2, -2],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Companies = () => {
  const stats = [
  { icon: Users, value: "201+", label: "Trusted Bangalore Partners" },
  { icon: Star, value: "4.9", label: "Average Rating from Bangalore Clients" },
  { icon: Award, value: "50K+", label: "Properties Listed in Bangalore" },
  { icon: TrendingUp, value: "99%", label: "Success Rate in Bangalore Real Estate" }
];


  const companyLogos = [
  { 
    src: logos.Prestige, 
    alt: "Prestige Apartments and Flats for Sale in Bangalore | Prestige Group Real Estate", 
    name: "Prestige", 
    url: "https://www.prestigeconstructions.com/" 
  },
  { 
    src: logos.Assetz, 
    alt: "Assetz Property Bangalore | Luxury Apartments, Flats and Villas for Sale", 
    name: "Assetz", 
    url: "https://www.assetzproperty.com/" 
  },
  { 
    src: logos.Brigadegroup, 
    alt: "Brigade Group Apartments and Flats in Bangalore | Brigade Real Estate Projects", 
    name: "Brigadegroup", 
    url: "https://www.brigadegroup.com/" 
  },
  { 
    src: logos.sobha, 
    alt: "Sobha Luxury Apartments and Villas in Bangalore | Sobha Real Estate Projects", 
    name: "Sobha", 
    url: "https://www.sobha.com/" 
  },
  { 
    src: logos.Sbr, 
    alt: "SBR Group Villas and Apartments in Whitefield Bangalore | SBR Real Estate", 
    name: "Sbr", 
    url: "https://sbrgroup.in/" 
  }
];



  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
  variants={itemVariants}
  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
  aria-label="Trusted in India and Bangalore"
>
  <Shield className="w-4 h-4" aria-hidden="true" />
  Trusted in Bangalore & India
</motion.span>

          
          <motion.h2
  variants={itemVariants}
  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
>
  Trusted by{' '}
  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
    Bangalore’s Industry Leaders
  </span>
</motion.h2>

          
          <motion.p
  variants={itemVariants}
  className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
>
  Join thousands of successful <strong>Bangalore-based companies</strong> that rely on our platform for their real estate needs and grow their business in the city.
</motion.p>

        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                animate={floatingAnimation}
                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center"
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl"
        >
          <motion.div 
  variants={itemVariants}
  className="text-center mb-12"
>
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
    Building Dreams for Every Homeowner in Bangalore
  </h3>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    From modern apartments to luxurious villas, we connect you with the most trusted <strong>Bangalore-based builders</strong> to make your dream home a reality.
  </p>
</motion.div>


          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
          >
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={logoVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group relative"
              >
                <a 
  href={logo.url} 
  target="_blank" 
  rel="noopener noreferrer" 
  aria-label={`Visit ${logo.name} website`}
  className="block relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-6 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300"
>
  <img 
    className="h-12 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
    src={logo.src} 
    alt={logo.alt}
    width="158" 
    height="48"
    loading="lazy"
  />

  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>

  {/* Tooltip */}
  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
    {logo.name}
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
  </div>
</a>

              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.section
  variants={itemVariants}
  className="mt-12 pt-8 border-t border-gray-200"
  aria-label="Platform Features and Security"
>
  <div className="flex flex-wrap justify-center items-center gap-8 text-sm sm:text-base text-gray-600">
    
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
        aria-hidden="true"
      ></span>
      <span className="font-medium">Enterprise Security for Bangalore Clients</span>
    </div>
    
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
        aria-hidden="true"
      ></span>
      <span className="font-medium">24/7 Support in Bangalore</span>
    </div>
    
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
        aria-hidden="true"
      ></span>
      <span className="font-medium">99.9% Uptime Guaranteed</span>
    </div>
    
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
        aria-hidden="true"
      ></span>
      <span className="font-medium">GDPR Compliant & Secure</span>
    </div>
    
  </div>
</motion.section>

        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="px-6 py-3 sm:px-8 sm:py-4 text-white rounded-2xl 
             shadow-2xl hover:shadow-pink-500/25 transition-all 
             font-bold text-base sm:text-lg inline-flex items-center group relative overflow-hidden"
  style={{
    background: "radial-gradient(circle, rgba(227, 74, 42, 1) 0%, rgba(149, 4, 118, 1) 100%)",
  }}
>
  <span className="relative z-10 flex items-center">
    Join Our Real Estate Network in Bangalore
    <TrendingUp
      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
      aria-label="Trending Up Icon"
    />
  </span>
  {/* Optional Hover Overlay */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-2xl" 
       style={{ background: "rgba(0,0,0,0.1)" }}>
  </div>
</motion.button>

          
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
  Start your journey with <strong>Bangalore’s top real estate companies</strong> today and grow your network in the city.
</p>

        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
