'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const comparisonData = [
    {
      category: 'Agent Fees',
      traditional: 'Pay 10-20% commission',
      homebiro: 'One-time flat fee',
      icon: '💰'
    },
    {
      category: 'Time Spent',
      traditional: 'Weeks of searching alone',
      homebiro: 'We do the hunting for you',
      icon: '⏱️'
    },
    {
      category: 'Property Inspection',
      traditional: 'Rush through viewings',
      homebiro: 'Thorough professional inspection',
      icon: '🔍'
    },
    {
      category: 'Neighbourhood Info',
      traditional: 'Guess and hope for the best',
      homebiro: 'Complete area tours & insights',
      icon: '🗺️'
    },
    {
      category: 'Legal Protection',
      traditional: 'Navigate paperwork alone',
      homebiro: 'Free legal guide book included',
      icon: '📚'
    },
    {
      category: 'Success Guarantee',
      traditional: 'No guarantees',
      homebiro: '100% satisfaction in 30 days',
      icon: '✅'
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-6 mb-4">
            Our <span className="text-gradient">Fee Structure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the traditional chaos with the Homebiro experience
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 md:p-8 bg-white border-b-2 border-gray-200">
              <div></div>
              <div className="text-center">
                <div className="text-2xl mb-2">😰</div>
                <h3 className="font-bold text-lg text-gray-900">Traditional Market</h3>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎉</div>
                <h3 className="font-bold text-lg gradient-blue text-white rounded-lg py-2">
                  Homebiro Experience
                </h3>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-4 md:p-6 hover:bg-white/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-gray-900">{item.category}</span>
                  </div>
                  <div className="flex items-center justify-center text-center">
                    <span className="text-gray-600 text-sm md:text-base">{item.traditional}</span>
                  </div>
                  <div className="flex items-center justify-center text-center">
                    <span className="text-primary-600 font-semibold text-sm md:text-base">
                      {item.homebiro}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="p-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center"
            >
              <h3 className="font-bricolage font-bold text-2xl mb-2">
                Ready to Experience the Difference?
              </h3>
              <p className="mb-6 text-blue-100">
                One-time payment. 30-day guarantee. 100% satisfaction.
              </p>
              <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl shine">
                Get Started Now
              </button>
            </motion.div>
          </motion.div>

          {/* Placeholder for comparison image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 p-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl text-center"
          >
            <p className="text-gray-700 font-semibold mb-2">📊 Detailed Comparison Image</p>
            <p className="text-sm text-gray-600">comparison chart</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
