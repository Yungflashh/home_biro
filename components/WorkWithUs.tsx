'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MissionAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mission" className="section-padding gradient-overlay" ref={ref}>
      <div className="container-custom text-center">

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24 mt-20"
        >
          <span className="px-20 py-8 w-[300px] my-8 bg-primary-100 text-primary-700 text-[20px] rounded-full font-semibold shadow-md">
            Our Mission
          </span>
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-20 mb-6">
            Making Home Search{' '}
            <span className="text-gradient">Stress-Free</span> for Every Tenant
          </h2>
        </motion.div>

        {/* About Us */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="px-4 py-2 text-center text-primary-700 rounded-full text-[20px] font-semibold shadow-md">
              About Us
            </span>
          </motion.div>
        </div>

        {/* Big Image - Mobile Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-6xl mx-auto mt-12"
        >
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop"
              alt="About Us - Modern Home"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )








  
}