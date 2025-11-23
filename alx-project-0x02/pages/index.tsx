import React from 'react';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">SoloForge</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A Next.js application built with TypeScript and Tailwind CSS
        </p>
        <Link
          href="/home"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
