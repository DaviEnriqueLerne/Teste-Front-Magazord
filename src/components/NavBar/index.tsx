import { FaGithub } from "react-icons/fa";

export function Navbar() {
  return (
    <nav className="hidden md:flex items-center bg-gray-900 text-white px-6 py-3 w-full shadow">
      <div className="flex items-center gap-2">
        <FaGithub className="w-6 h-6" />
        <span className="text-lg font-semibold">GitHub</span>
      </div>
      <span className="mx-2 text-gray-400 text-lg">/</span>
      <span className="text-gray-300 text-sm">Profile</span>
    </nav>
  );
}
