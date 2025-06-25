import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="min-h-[80vh] py-24 px-4 md:px-20 bg-white text-black flex flex-col lg:flex-row items-center justify-center gap-17">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-md overflow-hidden rounded-xl shadow-lg group"
      >
        <img
          src="images.jpg"
          alt="social icons"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center lg:text-left max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-blue-700">Us</span>
        </h2>
        <div className="w-16 h-1 bg-blue-700 mx-auto lg:mx-0 mb-4 rounded" />
        <p className="text-gray-800 text-base leading-relaxed">
        At Clousty SMM, we specialize in delivering social media marketing solutions that amplify your digital presence.
        From promotions and advertising to boosting engagement through likes, followers, views, and comments — we help brands grow where it matters most.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
