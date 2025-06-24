import { Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="min-h-[90vh] w-full bg-[#003087] flex items-center px-4 md:px-10 py-6 overflow-hidden">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Column - Login Form */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-white space-y-6"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
            Instant Social Boost.
            <br />
            <span className="inline-block relative">
              Real Results.
              <span className="absolute left-0 -bottom-1 w-10 h-[3px] bg-yellow-400"></span>
            </span>
          </h1>

          <p className="max-w-md text-gray-200 text-sm lg:text-base">
            Boost your followers, attract real customers, and grow your brand
            with Nigeria’s #1 platform for social media growth and digital
            marketing success.
          </p>

          <form className="w-full bg-[#143c7b] p-5 pt-6 pb-8 rounded-xl space-y-4 shadow-lg">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Email Or Username"
                className="w-full py-2.5 pl-10 pr-4 text-white placeholder-gray-400 bg-[#1f4ca6] 
                           rounded-tr-full rounded-br-full rounded-tl-none rounded-bl-none 
                           focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2.5 pl-10 pr-4 text-white placeholder-gray-400 bg-[#1f4ca6] 
                           rounded-tr-full rounded-br-full rounded-tl-none rounded-bl-none 
                           focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="text-sm text-center text-white space-y-1">
            <p className="text-yellow-400 font-medium">Forgot Your Password?</p>
            <p>
              Don’t have an account?{" "}
              <span className="text-yellow-400 font-bold cursor-pointer" onClick={()=> navigate('/register')}>
                Sign up
              </span>
            </p>
          </div>
        </motion.div>

        {/* Right Column - Bigger Hexagon */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] hexagon-mask rotate-90 overflow-hidden border-t-[8px] border-b-[8px] border-yellow-400 shadow-2xl">
            <iframe
              className="w-full h-full object-cover -rotate-90" // unrotate the video
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
              title="Mock YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
