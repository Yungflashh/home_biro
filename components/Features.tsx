'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: '🗺️',
      title: 'Pre-Move Neighbourhood Tours',
      description: 'We introduce you to neighbourhood tours so you don\'t have to request to hunt houses in an area you won\'t like. We discuss power grid, security, and amenities in each region.',
      image: '🏘️'
    },
    {
      icon: '🤝',
      title: 'Concierge Full Experience',
      description: 'No agent extortions, lies, or fake apartment listings. Connect directly with our Managed Tenant Concierge in cities across the region.',
      image: '👔'
    },
    {
      icon: '📚',
      title: 'Legal Protection',
      description: 'Our Free Book for Members "Landlord, Agent & Your Rights" protects your paperwork so you aren\'t cheated. Knowledge is power.',
      image: '⚖️'
    },
    {
      icon: '👥',
      title: 'Roommate Match',
      description: 'Request a compatible roommate match via our application. Find someone who shares your lifestyle and preferences.',
      image: '🤝'
    },
    {
      icon: '🔍',
      title: 'Property Inspection',
      description: 'Thorough professional inspections of every property. We check everything from plumbing to electrical systems.',
      image: '🏠'
    }
  ]

  return (
    <section id="solution" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-6 mb-4">
            We Make House Hunting{' '}
            <span className="text-gradient">Simple & Stress-Free</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our comprehensive apartment hunting solution
          </p>
        </motion.div>

        {/* Alternating Image-Text Layout */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">{feature.image}</div>
                    <p className="text-gray-700 font-semibold">Feature Image</p>
                    <p className="text-sm text-gray-600 mt-2">Will be provided</p>
                  </div>
                </div>
                {/* Decorative Blob */}
                <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-3xl mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-bricolage font-bold text-3xl md:text-4xl mb-6 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 gradient-blue text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Book Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-32 flex justify-center items-center overflow-hidden"
        >
         <h2 className='text-[40px] text-center'>Become Our Certified Tenant Concierge and Earn Up To 100k Monthly</h2>
        </motion.div>
      </div>
    </section>
  )
}