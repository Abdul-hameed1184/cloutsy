
const Feature = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-[#ffffff]">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);


export default Feature
