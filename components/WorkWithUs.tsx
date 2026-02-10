'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MissionAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mission" className="section-padding gradient-overlay" ref={ref}>
      <div className="container-custom">

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold shadow-md">
            🎯 Our Mission
          </span>
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-6 mb-6">
            Making Home Search{' '}
            <span className="text-gradient">Stress-Free</span> for Every Tenant
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            At Homebiro, our mission is to revolutionize the way tenants find their next home. 
            We believe that everyone deserves a seamless, transparent, and enjoyable home-hunting 
            experience — without the overwhelming stress of doing it alone.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            We exist to bridge the gap between tenants and their ideal homes by offering 
            personalized concierge services that handle the heavy lifting — from property searches 
            and inspections to neighbourhood tours and move-in coordination. Our goal is simple: 
            to help you find a home you truly love, faster and with zero hassle.
          </p>
        </motion.div>

        {/* About Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - About Us Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-semibold shadow-md">
              🏠 About Us
            </span>
            <h3 className="font-bricolage font-bold text-3xl md:text-4xl lg:text-5xl mt-6 mb-6">
              Your Dedicated{' '}
              <span className="text-gradient">Tenant Concierge</span> Partner
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Homebiro is a tenant concierge service built for renters who are tired of the 
              chaos that comes with finding a new home. We understand that searching for 
              apartments, scheduling inspections, and navigating unfamiliar neighbourhoods 
              can be exhausting — so we do it for you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our team of trained concierges works closely with each client to understand 
              their needs, preferences, and budget. From there, we take over the entire 
              process — curating listings, conducting inspections, providing detailed 
              neighbourhood insights, and guiding you all the way to your new front door.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're relocating to a new city, upgrading your space, or searching 
              for your very first apartment, Homebiro is here to make the journey smooth, 
              personal, and even enjoyable.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '500+', label: 'Happy Tenants' },
                { number: '10+', label: 'Cities Covered' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-2xl p-4 shadow-lg text-center"
                >
                  <div className="font-bricolage font-bold text-2xl text-gradient">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Placeholder Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <p className="text-lg font-semibold">About Homebiro</p>
                  <p className="text-sm opacity-80 mt-2">Team or office image</p>
                </div>
              </div>
            </div>

            {/* Decorative floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl">
                  🤝
                </div>
                <div>
                  <p className="font-bold text-gray-900">Trusted by Tenants</p>
                  <p className="text-sm text-gray-500">Across multiple cities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}