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
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🤝',
      title: 'Concierge Full Experience',
      description: 'No agent extortions, lies, or fake apartment listings. Connect directly with our Managed Tenant Concierge in cities across the region.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: '📚',
      title: 'Legal Protection',
      description: 'Our Free Book for Members "Landlord, Agent & Your Rights" protects your paperwork so you aren\'t cheated. Knowledge is power.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '👥',
      title: 'Roommate Match',
      description: 'Request a compatible roommate match via our application. Find someone who shares your lifestyle and preferences.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: '🔍',
      title: 'Property Inspection',
      description: 'Thorough professional inspections of every property. We check everything from plumbing to electrical systems.',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: '⚡',
      title: '30-Day Guarantee',
      description: '100% satisfaction guaranteed within 30 days. If you\'re not happy, we\'re not done working.',
      color: 'from-teal-400 to-teal-600'
    }
  ]

  return (
    <section id="solution" className="section-padding gradient-overlay" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-semibold shadow-md">
            Features & Services
          </span>
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-6 mb-4">
            Everything You Need,{' '}
            <span className="text-gradient">All in One Place</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the complete solution for stress-free house hunting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-md`}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-bricolage font-bold text-2xl mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="mt-4 flex items-center text-primary-600 font-semibold"
              >
                <span className="mr-2">Learn more</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Book Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="text-white">
              <h3 className="font-bricolage font-bold text-3xl md:text-4xl mb-4">
                Free Legal Guide Book
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                "Landlord, Agent & Your Rights" - A comprehensive guide to protect 
                yourself from scams, understand your rights, and navigate rental agreements 
                with confidence.
              </p>
              <ul className="space-y-3 mb-8">
                {['Know Your Rights', 'Avoid Common Scams', 'Legal Templates', 'Expert Advice'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                Download Free Book
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl p-4 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="font-semibold">Book Cover Image</p>
                  <p className="text-sm mt-2">Will be provided</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
