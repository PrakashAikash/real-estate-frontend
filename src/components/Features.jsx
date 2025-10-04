import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Award, ChevronRight } from "lucide-react";
import { features } from "../assets/featuredata";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: { 
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const floatingAnimation = {
  y: [-3, 3, -3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
  animate={floatingAnimation}
  className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#e34a2a] to-[#950476] text-white rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4 sm:mb-6 shadow-lg border border-purple-700/30"
>
  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
  PREMIUM REAL ESTATE FEATURES IN BANGALORE
  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
</motion.div>

<h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-snug">
  <span className="text-black">Why Choose </span>
  <span className="bg-gradient-to-r from-[#e34a2a] via-[#950476] to-[#e34a2a] bg-clip-text text-transparent">
    Excellence in Bangalore Real Estate
  </span>
</h2>

          <div className="flex justify-center mb-8">
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full shadow-lg"
              animate={pulseAnimation}
            ></motion.div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
  Experience unparalleled service with our innovative approach to helping you find your{' '}
  <span className="text-blue-600 font-semibold">perfect home in Bangalore</span>, 
  whether it's a modern apartment, luxurious villa, or family-friendly property.
</p>


          {/* Trust indicators */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm md:text-base text-gray-500"
>
  <div 
    className="flex items-center gap-1 sm:gap-2"
    role="status" 
    aria-label="Award Winning Real Estate Service in Bangalore"
  >
    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" aria-hidden="true" />
    <span className="font-medium text-xs sm:text-sm md:text-base">
      Award Winning <strong>Bangalore Real Estate Service</strong>
    </span>
  </div>

  <div 
    className="flex items-center gap-1 sm:gap-2"
    role="status" 
    aria-label="98% Success Rate for Real Estate Properties in Bangalore"
  >
    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" aria-hidden="true" />
    <span className="font-medium text-xs sm:text-sm md:text-base">
      98% Success Rate for <strong>Bangalore Properties</strong>
    </span>
  </div>

  <div 
    className="flex items-center gap-1 sm:gap-2"
    role="status" 
    aria-label="Trusted by over 10,000 Families for Bangalore Real Estate"
  >
    <div className="w-2 h-2 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
    <span className="font-medium text-xs sm:text-sm md:text-base">
      Trusted by 10K+ Families in <strong>Bangalore Real Estate</strong>
    </span>
  </div>
</motion.div>

        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100/50 hover:border-blue-200/50 transition-all duration-500 h-full">
                {/* Icon with Enhanced Styling */}
                <motion.div 
                  className="relative w-20 h-20 mb-8"
                  animate={hoveredCard === index ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-md opacity-30"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:border-blue-300 transition-all duration-300">
                    <feature.icon className="h-10 w-10 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                  </div>
                  
                  {/* Floating elements */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                      >
                        <Sparkles className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                  {feature.description}
                </p>
                
                {/* Enhanced Learn More Link */}
                <motion.div
                  className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
                >
                  <motion.a 
  href="/features" 
  className="inline-flex items-center text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 transition-colors group/link"
  whileHover={{ x: 5 }}
  aria-label="Explore Premium Real Estate Features in Bangalore"
  title="Explore Premium Real Estate Features in Bangalore"
>
  Explore Premium Real Estate Features in Bangalore
  <ChevronRight className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
</motion.a>

                  
                  <motion.div
                    className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </motion.div>
                </motion.div>

                {/* Number indicator */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-gray-100 group-hover:bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 group-hover:text-blue-600 transition-all duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 border border-gray-200/50 shadow-2xl">
            <motion.div
              animate={floatingAnimation}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
  Ready to Find Your{' '}
  <span className="bg-gradient-to-r from-[#e34a2a] via-[#950476] to-[#e34a2a] bg-clip-text text-transparent">
    Dream Home in Bangalore?
  </span>
</h3>

            
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
  Join thousands of satisfied customers in <span className="font-semibold text-blue-600">Bangalore</span> who found their perfect home with our premium real estate features and personalized service.
</p>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/properties"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all text-lg inline-flex items-center group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all text-lg inline-flex items-center group"
              >
                Contact Expert
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
            
            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600">
  <div className="flex items-center gap-2" role="status" aria-label="Over 10,000 happy families in Bangalore real estate">
    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    <span className="font-medium">10,000+ Happy Families in Bangalore</span>
  </div>

  <div className="flex items-center gap-2" role="status" aria-label="5-Star Average Rating for Bangalore Properties">
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
    <span className="font-medium">5-Star Average Rating for Bangalore Properties</span>
  </div>

  <div className="flex items-center gap-2" role="status" aria-label="24/7 Premium Support for Bangalore Real Estate Customers">
    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
    <span className="font-medium">24/7 Premium Support for Bangalore Real Estate Customers</span>
  </div>
</div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;