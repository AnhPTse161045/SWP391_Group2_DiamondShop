import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import brandIcon from './assets/brandicon.png';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed bg-[#31353d] text-gray-500 z-5 h-full shadow-lg transition duration-300 ease-in-out w-64">
      <div className="flex items-center py-5 px-3.5">
        <Image src={brandIcon} alt="Brand Icon" width={35} height={35} className="w-12 mx-3.5 min-h-fit" />
        <p className="pl-2 font-bold text-2xl">Admin Dashboard</p>
      </div>
      <nav className="px-4 py-2">
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Dashboard
        </Link>
        <Link href="/projects" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Projects
        </Link>
        <Link href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
