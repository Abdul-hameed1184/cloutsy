import { motion } from 'framer-motion'
import { User, DollarSign, Grid, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: <User className="w-6 h-6 text-[#0047FF]" />,
    title: '1. Create your account',
    desc: 'Creating an account is the first step, then you need to log in',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#0047FF]" />,
    title: '2. Fund your account',
    desc: 'Next, pick a payment method and add funds to your account',
  },
  {
    icon: <Grid className="w-6 h-6 text-[#0047FF]" />,
    title: '3. Select Services',
    desc: 'Select the services you want and get ready to receive more publicity',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#0047FF]" />,
    title: '4. Enjoy Results !',
    desc: 'You can enjoy incredible results when your order is complete',
  },
]

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b1226]">
          How <span className="text-[#0047FF]">Palash SMM</span> Works
        </h2>
        <p className="text-gray-600 mt-3 text-sm md:text-base">
          How to get started with Palash SMM and boost your social media game –
          Proven results, unwavering support, where visibility meets real influence.
        </p>
      </motion.div>

      <div className="relative mt-16 max-w-6xl mx-auto">
        {/* Vertical Divider */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#e5e7eb] z-0" />
        {/* Horizontal Divider */}
        <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-[#e5e7eb] z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center px-6 py-4 bg-white rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#f1f5ff] p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-[#0b1226] text-lg">
                <span className="text-[#0047FF]">{step.title.split('.')[0]}.</span>{' '}
                {step.title.split('. ')[1]}
              </h3>
              <p className="text-sm text-gray-600 mt-2 max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
