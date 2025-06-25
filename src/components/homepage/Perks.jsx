import { motion } from "framer-motion";

const perks = [
  {
    title: "Instant Delivery",
    subtitle: "Your orders go live in seconds, not hours.",
  },
  {
    title: " Affordable Rates",
    subtitle: "Top-tier results without breaking the bank.",
  },
  {
    title: "24/7 Support",
    subtitle: " Need help? We’re always online.",
  },

];

const Perks = () => {
  return (
    <section className="relative bg-[#000000] pt-16 pb-28">
      <div className="text-center max-w-2xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#fff] mb-2"
        >
          Perks Of <span className="text-[#0047FF]">CLOUSTY SMM</span>
        </motion.h2>
        <p className="text-sm md:text-base text-white">
          Get real results with lightning-fast delivery, around-the-clock support, and budget-friendly pricing.
          Clousty SMM equips you with everything you need to grow smarter and stand out online.
        </p>
        <div className="w-12 h-1 bg-[#0047FF] mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-30 px-6 md:px-0">
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white w-[240px] h-[240px] flex items-center justify-center text-center rounded-xl px-4 transition-all duration-1000 hover:-translate-y-5"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
            }}
          >
            <h3 className="text-md md:text-lg font-bold text-[#0b1226] leading-snug">
              {perk.title}
              <br />
             <p className="text-sm md:text-sm text-gray-500 leading-snug">{perk.subtitle}</p> 
            </h3>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ff2a00] text-[#0b1226] font-semibold px-6 py-3 rounded-md shadow-lg hover:brightness-110 transition"
        >
          Start Boosting
        </motion.button>
      </div>
    </section>
  );
};

export default Perks;
