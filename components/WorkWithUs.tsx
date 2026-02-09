'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WorkWithUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: '💼',
      title: 'Flexible Schedule',
      description: 'Work on your own time and choose your clients'
    },
    {
      icon: '📈',
      title: 'Competitive Earnings',
      description: 'Earn significantly more than traditional agent commissions'
    },
    {
      icon: '🎓',
      title: 'Training Provided',
      description: 'Comprehensive onboarding and continuous support'
    },
    {
      icon: '🌍',
      title: 'Multiple Cities',
      description: 'Opportunities available across major metropolitan areas'
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Join a network of professional concierges'
    },
    {
      icon: '🏆',
      title: 'Certification',
      description: 'Become a certified Homebiro Tenant Concierge'
    }
  ]

  return (
    <section id="work-with-us" className="section-padding gradient-overlay" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-semibold shadow-md">
              Join Our Team
            </span>
            <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-6 mb-6">
              Become a Certified{' '}
              <span className="text-gradient">Homebiro Tenant Concierge</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Help people find their dream homes while building a rewarding career. 
              Join our growing network of professional tenant concierges making a 
              real difference in people's lives.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'No previous real estate experience required',
                'Full training and certification program',
                'Work independently with full support',
                'Make a positive impact in your community'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gradient-blue text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all shine"
            >
              Apply Now
            </motion.button>
          </motion.div>

          {/* Right Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="font-bricolage font-bold text-3xl text-center mb-12">
            Simple Application Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', desc: 'Fill out our quick application form' },
              { step: '02', title: 'Interview', desc: 'Meet with our team virtually or in-person' },
              { step: '03', title: 'Training', desc: 'Complete our comprehensive certification program' },
              { step: '04', title: 'Start Earning', desc: 'Begin helping clients find their perfect homes' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
