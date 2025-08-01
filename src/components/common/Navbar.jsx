import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isUserPage, setIsUserPage] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuthStore();

  useEffect(() => {
    setIsUserPage(location.pathname.includes("/user"));
  }, [location.pathname]);

  const generalLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const userLinks = [
    { label: "Dashboard", href: "/user/dashboard" },
    { label: "Services", href: "/user/services" },
    { label: "Add Fund", href: "/user/fund" },
    { label: "Fund History", href: "/user/history" },
    { label: "Transactions", href: "/user/transactions" },
  ];

  const orderDropdownLinks = [
    { label: "New Order", href: "/user/new-order" },
    { label: "Mass Order", href: "/user/mass-order" },
    { label: "All Orders", href: "/user/all-orders" },
    { label: "Refill Orders", href: "/user/order-refill" },
    { label: "Drip Feed", href: "/user/drip-feed" },
  ];

  const userDropdownLinks = [
    { label: "My Profile", href: "/user/my-profile" },
    { label: "My Referral", href: "/user/my-referral" },
    { label: "Referral Bonus", href: "/user/referral-bonus" },
    { label: "Open Ticket", href: "/user/open-ticket" },
    { label: "Show Ticket", href: "/user/show-ticket" },
  ];

  return (
    <header className="w-full top-0 left-0 bg-white fixed z-50" style={{
      boxShadow: "0 2px 8px rgba(0, 48, 135, 0.15), 0 4px 20px rgba(0, 48, 135, 0.08)"
    }}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-10 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Palash Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-blue-800 relative">
          {!isUserPage ? (
            <>
              {generalLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-[#954C2E] transition">
                  {link.label}
                </a>
              ))}
              {/* <button onClick={logout} className="flex items-center gap-2 hover:text-[#954C2E] transition">
                <LogOut size={16} />
                Log out
              </button> */}
            </>
          ) : (
            <>
              <a href="/user/dashboard" className="hover:text-[#954C2E] transition">
                Dashboard
              </a>

              {/* Orders Dropdown */}
              <div className="relative group">
                <div className="flex items-center space-x-1 hover:text-[#954C2E] cursor-pointer">
                  <span>Orders</span>
                  <ChevronDown size={16} />
                </div>
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {orderDropdownLinks.map((item) => (
                    <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-[#003087] hover:bg-gray-100">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {userLinks.slice(1).map((link) => (
                <a key={link.label} href={link.href} className="hover:text-[#954C2E] transition">
                  {link.label}
                </a>
              ))}

              {/* User Dropdown */}
              <div className="relative group">
                <div className="flex items-center space-x-1 hover:text-[#954C2E] cursor-pointer">
                  <User />
                  <span>USER</span>
                  <ChevronDown size={16} />
                </div>
                <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {userDropdownLinks.map((item) => (
                    <a key={item.label} href={item.href} className="block px-4 py-2 text-sm text-[#003087] hover:bg-gray-100">
                      {item.label}
                    </a>
                  ))}
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                    <LogOut size={16} className="inline mr-2" /> Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-[#003087]">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-3 text-sm font-medium text-[#001a4d]">
          {!isUserPage ? (
            <>
              {generalLinks.map((link) => (
                <a key={link.href} href={link.href} className="block hover:text-[#954C2E] transition-colors">
                  {link.label}
                </a>
              ))}
              {/* <button onClick={logout} className="flex items-center gap-2 text-red-600">
                <LogOut size={16} />
                Logout
              </button> */}
            </>
          ) : (
            <>
              <a href="/user/dashboard" className="block hover:text-[#954C2E] transition-colors">
                Dashboard
              </a>

              {/* Orders Dropdown */}
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full hover:text-[#954C2E] transition-colors"
                >
                  <span>Orders</span>
                  <ChevronDown size={18} className={`transform transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="mt-3 space-y-2 pl-4 border-l border-[#003087]/10">
                    {orderDropdownLinks.map((item) => (
                      <a key={item.label} href={item.href} className="block text-[#003087] hover:underline text-sm transition">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {userLinks.slice(1).map((link) => (
                <a key={link.label} href={link.href} className="block hover:text-[#954C2E] transition-colors">
                  {link.label}
                </a>
              ))}

              <button onClick={logout} className="flex items-center gap-2 text-red-600">
                <LogOut size={16} />
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
