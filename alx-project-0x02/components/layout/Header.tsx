import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            SoloForge
          </Link>
          
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/home"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
