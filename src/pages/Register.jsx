import React, { useState } from "react";
import Feature from "../components/common/Feature";
import Input from "../components/common/Input";
import {
  User,
  AtSign,
  Mail,
  Globe,
  Phone,
  Lock,
  Rocket,
  Shield,
  Headphones,
} from "lucide-react";
import Select from "react-select";
import countryData from "../assets/countries.json";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

// Prepare country options for react-select
const countriesArray = Array.isArray(countryData?.countries)
  ? countryData.countries
  : [];
const countryOptions = countriesArray.map((c) => ({
  value: c.code || "",
  label: c.code ? `${c.code} (${c.name})` : c.name,
}));

const Register = () => {
  const navigate = useNavigate();
  const { signup, loading, error } = useAuthStore();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    countryCode: countryOptions[0] || { value: "", label: "" },
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [localError, setLocalError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setLocalError("");
  };

  // Handle country select
  const handleCountryChange = (option) => {
    setForm((prev) => ({
      ...prev,
      countryCode: option,
    }));
    setLocalError("");
  };

  // Validation logic
  const validate = () => {
    if (!form.firstName.trim()) return "First name is required.";
    if (!form.lastName.trim()) return "Last name is required.";
    if (!form.username.trim()) return "Username is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email address.";
    if (!form.countryCode || !form.countryCode.value)
      return "Country code is required.";
    if (!form.phoneNumber.trim()) return "Phone number is required.";
    if (!/^[0-9]+$/.test(form.phoneNumber))
      return "Phone number must contain only digits.";
    if (form.phoneNumber.length < 6)
      return "Phone number must be at least 6 digits.";
    if (!form.password) return "Password is required.";
    if (form.password.length < 6)
      return "Password must be at least 6 characters.";
    if (!form.confirmPassword) return "Confirm your password.";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match.";
    if (!form.terms) return "You must agree to the Terms & Conditions.";
    return "";
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");
    const validationMsg = validate();
    if (validationMsg) {
      setLocalError(validationMsg);
      return;
    }
    const success = await signup(
      form.firstName,
      form.lastName,
      form.countryCode.value + form.phoneNumber,
      form.username,
      form.email,
      form.password
    );
    if (success) {
      navigate("/user/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#17005d] px-4 py-8 pt-48">
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

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Input
              label="First Name"
              icon={<User size={16} />}
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <Input
              label="Last Name"
              icon={<User size={16} />}
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
            <Input
              label="Username"
              icon={<AtSign size={16} />}
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <Input
              label="Email Address"
              icon={<Mail size={16} />}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1 flex items-center gap-1">
                <Globe size={16} /> Country Code
              </label>
              <Select
                options={countryOptions}
                value={form.countryCode}
                onChange={handleCountryChange}
                classNamePrefix="react-select"
                className="mb-2"
                isSearchable
                name="countryCode"
              />
            </div>
            <div className="md:col-span-2 flex gap-2 items-end">
              <div className="flex-1">
                <Input
                  label="Phone Number"
                  icon={<Phone size={16} />}
                  name="phoneNumber"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <span className="text-xs text-gray-500 mb-2 whitespace-nowrap">
                {form.countryCode?.value}
                {form.phoneNumber && " " + form.phoneNumber}
              </span>
            </div>
            <Input
              label="Password"
              icon={<Lock size={16} />}
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Input
              label="Confirm Password"
              icon={<Lock size={16} />}
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <div className="md:col-span-2 flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                className="accent-blue-700"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-600 font-medium">
                  Terms & Conditions
                </a>
              </label>
            </div>
            {(localError || error) && (
              <div className="md:col-span-2 text-xs text-red-500 text-center mt-2">
                {localError || error}
              </div>
            )}
            <button
              type="submit"
              className={`md:col-span-2 mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md transition ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
