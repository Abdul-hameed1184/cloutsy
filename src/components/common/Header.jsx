export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-[#002b6b] text-white shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold tracking-wide">
        <span className="text-yellow-400">⚡</span>PALASH <span className="text-sm">SMM</span>
      </h1>
      <nav className="space-x-6 text-sm hidden md:block">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">About</a>
        <a href="#" className="hover:text-yellow-400">Service</a>
        <a href="#" className="hover:text-yellow-400">FAQ</a>
        <a href="#" className="hover:text-yellow-400">Contact</a>
      </nav>
    </header>
  );
}
