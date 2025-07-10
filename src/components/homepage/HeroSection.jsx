import { Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <section className="min-h-[90vh] w-full bg-[#17005d] flex items-center px-4 md:px-10 py-6 pt-28 overflow-hidden">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Left Column - Login Form */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-white space-y-6"
        >
          <h1 className="text-4xl lg:text-3xl font-extrabold leading-snug">
            Supercharge Your Social Media Growth
            <br />
            <span className="inline-block relative">
              with Clousty SMM 🚀
              <span className="absolute left-0 -bottom-1 w-10 h-[3px] bg-yellow-400"></span>
            </span>
          </h1>

          <p className="max-w-md text-gray-200 text-sm lg:text-base">
            Affordable. Fast. Reliable. Get real followers, likes, views & more across all 
            major platforms — delivered instantly.
          </p>

          <form
            className="w-full bg-[#0f003b] p-5 pt-6 pb-8 rounded-xl space-y-4 shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/user/dashboard");
            }}
          >
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Email Or Username"
                className="w-full py-2.5 pl-10 pr-4 text-white placeholder-gray-400 bg-[#1f4ca6] 
                          rounded-full
                           focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2.5 pl-10 pr-4 text-white placeholder-gray-400 bg-[#1f4ca6] 
                           rounded-full 
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
          <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px]  overflow-hidden">
            <img src="/hero_section.svg"  alt="CLOUSTY LOGO" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
