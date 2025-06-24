import React from "react";
import Feature from "../components/common/Feature";
import Input from "../components/common/Input";
import { User, AtSign, Mail, Globe, Phone, Lock, Rocket, Shield, Headphones } from 'lucide-react';


const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9fb] px-4 py-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Features */}
        <div className="flex flex-col justify-center gap-6">
          <Feature
            icon={<Rocket size={20} className="text-blue-600" />}
            title="Fast Onboarding"
            description="Get started in minutes and boost your socials today"
          />
          <Feature
            icon={<Shield size={20} className="text-blue-600" />}
            title="Secure Platform"
            description="Your data and transactions are always protected"
          />
          <Feature
            icon={<Headphones size={20} className="text-blue-600" />}
            title="24/7 Support"
            description="We’re always here to help whenever you need us"
          />
        </div>

        {/* Right Side: Signup Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#0b1226]">
            Create Your Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Fill in your details to get started
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="First Name" icon={<User size={16} />} />
            <Input label="Last Name" icon={<User size={16} />} />
            <Input label="Username" icon={<AtSign size={16} />} />
            <Input
              label="Email Address"
              icon={<Mail size={16} />}
              type="email"
            />
            <Input
              label="Country Code"
              icon={<Globe size={16} />}
              defaultValue="+93 (Afghanistan)"
            />
            <Input label="Phone Number" icon={<Phone size={16} />} />
            <Input label="Password" icon={<Lock size={16} />} type="password" />
            <Input
              label="Confirm Password"
              icon={<Lock size={16} />}
              type="password"
            />
          </form>

          <div className="mt-4 flex items-center gap-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-600 font-medium">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition">
            Create Account
          </button>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 font-medium">
              Login Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
