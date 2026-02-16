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

        {/* About Us */}
        <div className="">
          {/* Left - About Us Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >



            
            <span className="px-4 py-2 text-center text-primary-700 rounded-full text-[20px] font-semibold shadow-md">
               About Us
            </span>
            <h3 className="font-bricolage font-bold line-he md:text-[36px] lg:text-[80px] mt-6 text-base/tight">
              Your Dedicated{' '}
              <span className="text-gradient mt-[-20px]">Tenant Concierge</span> Partner
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Homebiro is a tenant concierge service built for renters who are tired of the 
              chaos that comes with finding a new home. We understand that searching for 
              apartments, scheduling inspections, and navigating unfamiliar neighbourhoods 
              can be exhausting — so we do it for you.
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
                  className="bg-black rounded-2xl p-4 shadow-lg text-center mb-8"
                >
                  <div className="font-bricolage  font-bold text-2xl text-black">{stat.number}</div>
                  <div className="text-sm  text-black-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

         
        </div>


        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24 mt-20"
        >
          <span className="px-20 py-8 w-[300px] my-8 bg-primary-100 text-primary-700 text-[20px]  rounded-full font-semibold shadow-md ">
             Our Mission
          </span>
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-20 mb-6">
            Making Home Search{' '}
            <span className="text-gradient">Stress-Free</span> for Every Tenant
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            At Homebiro, our mission is to revolutionize the way tenants find their next home. 
            We believe that everyone deserves a seamless, transparent, and enjoyable home-hunting 
            experience — without the overwhelming stress of doing it alone.
          </p>
       
        </motion.div>

        

      </div>
    </section>
  )
}