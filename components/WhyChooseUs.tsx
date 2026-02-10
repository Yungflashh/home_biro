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
    <>
      <section id="pricing" className="my-24 bg-white" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
           
            <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-6 mb-4">
              Our <span className="text-gradient">Concierge Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Prices and Features Vary by State. <span className='text-blue-500'>Learn More</span>
            </p>
          </motion.div>

        </div>
      </section>

      {/* Homebiro Services Section */}
      <section className=" py-44 bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-bricolage font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Homebiro <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Premium apartment hunting solutions designed for modern renters
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}