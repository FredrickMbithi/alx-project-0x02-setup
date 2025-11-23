import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About SoloForge</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SoloForge is a demonstration Next.js application that showcases modern web development
              practices using the Pages Router, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We focus on building scalable, maintainable, and performant web applications with
              clean code architecture and beautiful user interfaces.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Button Variations</h2>
          <p className="text-gray-600 mb-6">
            Explore our Button component with different sizes and shapes:
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            {/* Small Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Small Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="small" shape="rounded-sm">
                  Small - Rounded SM
                </Button>
                <Button size="small" shape="rounded-md">
                  Small - Rounded MD
                </Button>
                <Button size="small" shape="rounded-full">
                  Small - Rounded Full
                </Button>
              </div>
            </div>

            {/* Medium Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Medium Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="medium" shape="rounded-sm">
                  Medium - Rounded SM
                </Button>
                <Button size="medium" shape="rounded-md">
                  Medium - Rounded MD
                </Button>
                <Button size="medium" shape="rounded-full">
                  Medium - Rounded Full
                </Button>
              </div>
            </div>

            {/* Large Buttons */}
            <div className="mb-0">
              <h3 className="text-lg font-medium text-gray-700 mb-4">Large Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <Button size="large" shape="rounded-sm">
                  Large - Rounded SM
                </Button>
                <Button size="large" shape="rounded-md">
                  Large - Rounded MD
                </Button>
                <Button size="large" shape="rounded-full">
                  Large - Rounded Full
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
