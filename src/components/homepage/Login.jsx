import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  return (
    <section className="px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Instant Social Boost.<br />
          <span className="text-white">Real Results.</span>
        </h1>
        <p className="text-sm text-gray-200">
          Boost your followers, attract real customers, and grow your brand with Nigeria's
          #1 platform for social media growth and digital marketing success.
        </p>
        <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm w-full max-w-md">
          <div className="flex items-center space-x-2 bg-white/20 p-2 rounded">
            <Mail className="text-white w-4 h-4" />
            <input
              type="email"
              placeholder="Email Or Username"
              className="bg-transparent text-white w-full outline-none"
            />
          </div>
          <div className="flex items-center space-x-2 bg-white/20 p-2 rounded mt-4">
            <Lock className="text-white w-4 h-4" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent text-white w-full outline-none"
            />
          </div>
          <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            Sign In
          </button>
          <div className="text-xs text-gray-300 mt-2 flex justify-between">
            <span className="hover:underline cursor-pointer">Forgot Your Password?</span>
            <span className="hover:underline cursor-pointer text-yellow-300">Sign up</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="w-64 h-64 bg-black/80 rounded-lg flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25M15.75 5.25L11.25 8.25M15.75 5.25L20.25 8.25" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
