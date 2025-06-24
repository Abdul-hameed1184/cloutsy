import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

const testimonials = [
  {
    name: 'Alica Fox',
    title: 'Shola June',
    text: 'I ordered Facebook page likes & IG followers on Palashsmm.com, I received good quality followers highly recommended, and I\'ll definitely order again Thank you.',
  },
  {
    name: 'Bosede Julianna',
    title: 'Digital Marketer',
    text: 'Well, I was testing the Instagram followers service and it works really well! Takes about 5–10 minutes to start and complete. I like the service.',
  },
  {
    name: 'Tom Moddy',
    title: 'Business Executive',
    text: 'I have been using PalashSMM for a week now and it is easily the best panel I have used. Great prices, easy to use and always updated. Great job!',
  },
  {
    name: 'Jacket',
    title: 'Developer',
    text: 'I actually faced a problem first try but support was there and helped me fix it. Great support and YouTube views—it’s one of the best.',
  },
]

const loopedTestimonials = [...testimonials, ...testimonials]

const Testimonials = () => {
  return (
        <section className="relative bg-[#011248] text-white py-40 px-4 sm:px-6 md:px-12 border-y-[3px] border-yellow-400 overflow-hidden rounded-[15rem_6rem]">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          Don’t Take Our Words For It
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 rounded-full" />
        <p className="uppercase text-xs md:text-sm mt-3 tracking-wide text-gray-300">
          See what some of our customers have to say about us
        </p>
      </motion.div>

      {/* Infinite Scrolling Wrapper */}
      <div className="mt-24 overflow-hidden">
        <motion.div
          className="flex gap-6 sm:gap-8 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: 'linear',
          }}
        >
          {loopedTestimonials.map((t, i) => (
            <div key={i} className="pt-10 relative z-0 overflow-visible">
              {/* Testimonial Card */}
              <div className="group relative w-[260px] sm:w-72 bg-[#132e4c] hover:bg-[#1d3c5e] rounded-xl pt-16 pb-6 px-6 shadow-md transition-all duration-500">
                {/* Rocket Icon - Fully Visible */}
                <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 z-10 bg-[#0047FF] p-4 group-hover:p-5 transition-all duration-300 rounded-full border-[3px] group-hover:border-[5px] border-yellow-400 shadow-lg">
                  <Rocket className="text-white w-6 h-6" />
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-gray-300 mb-4">{t.text}</p>
                <div className="border-t border-gray-500 pt-3">
                  <p className="text-yellow-400 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
