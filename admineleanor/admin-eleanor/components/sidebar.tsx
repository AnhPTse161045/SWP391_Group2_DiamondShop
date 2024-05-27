import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, CogIcon, UserIcon, ChartBarIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import brandIcon from '../components/assets/brandicon.png'; // Adjust the path if necessary

export default function SideBar() {
  return (
    <aside className="fixed bg-[#31353d] text-gray-200 z-50 h-full shadow-lg transition duration-300 ease-in-out w-64">
      <div className="flex items-center py-5 px-4">
        <Image
          src={brandIcon}
          alt="Admin Logo"
          className="w-12 h-12"
        />
        <p className="ml-3 font-bold text-2xl">Admin Dashboard</p>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="px-6 py-3 hover:bg-gray-700 hover:text-white flex items-center">
            <HomeIcon className="h-6 w-6 mr-3" />
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 hover:text-white flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-3" />
            <a href="/analytics">Analytics</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 hover:text-white flex items-center">
            <UserIcon className="h-6 w-6 mr-3" />
            <a href="/profile">Profile</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 hover:text-white flex items-center">
            <ShoppingCartIcon className="h-6 w-6 mr-3" />
            <a href="/profile">Product</a>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700 hover:text-white flex items-center">
            <CogIcon className="h-6 w-6 mr-3" />
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
