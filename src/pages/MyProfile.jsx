import React, { useState } from "react";
// import useThemeStore from "../store/useThemeStore";

const MyProfile = () => {
//   const { darkMode } = useThemeStore();
const darkMode = false
const [activeTab, setActiveTab] = useState("profile");
  const [profileImage, setProfileImage] = useState("");

  const inputClass = `border px-3 py-2 rounded-md text-sm w-full transition-all duration-300 ${
    darkMode
      ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
      : "bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500"
  }`;

  const labelClass = "text-sm font-medium mb-1";

  return (
    <div className={` ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}>

    <div
      className={`pt-20 max-w-6xl my-20 mx-auto px-4 min-h-screen transition-colors duration-300 ease-in-out ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Profile Card */}
<div
  className={`rounded-lg shadow-md p-4 flex flex-col items-center text-center ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}
>
  <input
    type="file"
    accept="image/*"
    id="profile-upload"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
      }
    }}
  />
  <div
    onClick={() => document.getElementById("profile-upload").click()}
    className={`w-40 h-40 border-2 border-dashed rounded-md flex items-center justify-center cursor-pointer overflow-hidden ${
      darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-100 border-gray-300"
    }`}
  >
    <img
      src={profileImage || "/upload-placeholder.svg"}
      alt="Upload"
      className="w-12 h-12 object-cover"
    />
  </div>
  <p className="mt-4 text-sm text-blue-700 dark:text-blue-400">
    Joined At 09 Jul, 2025 11:47 PM
  </p>
  <button
    onClick={() => document.getElementById("profile-upload").click()}
    className="mt-4 bg-blue-700 hover:bg-blue-800 text-white rounded-full px-4 py-2 text-sm"
  >
    Image Update
  </button>
</div>


        {/* Profile Settings */}
        <div
          className={`md:col-span-2 rounded-lg shadow-md p-4 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex gap-6 mb-4 border-b pb-2">
            <button
              className={`text-sm font-medium pb-2 border-b-2 transition-all duration-300 ${
                activeTab === "profile"
                  ? "border-blue-600 text-blue-700 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-300 border-transparent"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Profile Information
            </button>
            <button
              className={`text-sm font-medium pb-2 border-b-2 transition-all duration-300 ${
                activeTab === "password"
                  ? "border-blue-600 text-blue-700 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-300 border-transparent"
              }`}
              onClick={() => setActiveTab("password")}
            >
              Password Setting
            </button>
          </div>

          {activeTab === "profile" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input className={inputClass} placeholder="First Name" defaultValue="Abdul-hameed" />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input className={inputClass} placeholder="Last Name" defaultValue="Alli-shittu" />
              </div>
              <div>
                <label className={labelClass}>Username</label>
                <input className={inputClass} placeholder="Username" defaultValue="DEV__BUDDY" />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input className={inputClass} placeholder="Email" defaultValue="allishittuabdulhameed@gmail.com" />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input className={inputClass} placeholder="Phone Number" defaultValue="09011334758" />
              </div>
              <div>
                <label className={labelClass}>Preferred Language</label>
                <select className={inputClass} defaultValue="Arabic">
                  <option>Arabic</option>
                  <option>English</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelClass}>Address</label>
                <textarea rows={3} className={inputClass} placeholder="Address"></textarea>
              </div>
              <button className="mt-2 md:col-span-2 w-full bg-blue-700 hover:bg-blue-800 text-white rounded-full py-2 font-medium text-sm">
                Update User
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className={labelClass}>Current Password</label>
                <input className={inputClass} placeholder="Current Password" type="password" />
              </div>
              <div>
                <label className={labelClass}>New Password</label>
                <input className={inputClass} placeholder="New Password" type="password" />
              </div>
              <div>
                <label className={labelClass}>Confirm Password</label>
                <input className={inputClass} placeholder="Confirm Password" type="password" />
              </div>
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-full py-2 font-medium text-sm">
                Update Password
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Referral Link */}
      <div
        className={`rounded-lg shadow-md p-4 mt-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <p className="text-sm font-medium mb-2">Referral Link</p>
        <div className="flex items-center border rounded-md overflow-hidden">
          <input
            value="https://palashsmm.com/register/DEV__BUDDY"
            readOnly
            className={`flex-1 px-3 py-2 text-sm outline-none ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
            }`}
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                "https://palashsmm.com/register/DEV__BUDDY"
              );
            }}
            className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-800"
          >
            📋
          </button>
        </div>
      </div>
          </div>
    </div>
  );
};

export default MyProfile;
