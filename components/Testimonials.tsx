'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      image: '👩‍💼',
      quote: 'Homebiro saved me from a terrible scam! The agent was trying to charge me 30% commission for a fake listing. The legal guide book helped me spot the red flags immediately.',
      rating: 5
    },
    {
      name: 'Michael Adebayo',
      role: 'Software Engineer',
      image: '👨‍💻',
      quote: 'As a newcomer to Lagos, I was completely lost. Homebiro\'s neighbourhood tours showed me areas I would have never considered. Found my perfect home in 2 weeks!',
      rating: 5
    },
    {
      name: 'Chioma Okafor',
      role: 'Doctor',
      image: '👩‍⚕️',
      quote: 'The concierge service is worth every penny. They handled everything - from inspections to negotiations. I didn\'t have to take a single day off work!',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Business Owner',
      image: '👨‍💼',
      quote: 'No more agent lies and extortion! Homebiro was transparent about everything. The 30-day guarantee gave me complete peace of mind.',
      rating: 5
    },
    {
      name: 'Amina Mohammed',
      role: 'Graphic Designer',
      image: '👩‍🎨',
      quote: 'The roommate matching feature is brilliant! They found me a compatible roommate who shares my interests. Saved me thousands on rent.',
      rating: 5
    },
    {
      name: 'James Williams',
      role: 'Consultant',
      image: '👨‍💼',
      quote: 'Professional, reliable, and honest. These words are rare in the real estate market, but Homebiro embodies all three. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl mt-6 mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of satisfied tenants who avoided scams and found their dream homes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-primary-50 to-blue-50 px-12 py-6 rounded-full shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bricolage font-bold text-primary-600">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bricolage font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bricolage font-bold text-primary-600">100%</div>
              <div className="text-sm text-gray-600">Verified Reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
