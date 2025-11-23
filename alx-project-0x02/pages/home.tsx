import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import PostModal from '@/components/common/PostModal';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<PostProps | null>(null);

  const handlePostSubmit = (post: PostProps) => {
    setNewPost(post);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Home Page</h1>
        
        {/* Card Display Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Featured Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Welcome to SoloForge"
              content="This is a Next.js application demonstrating the Pages Router with TypeScript and Tailwind CSS."
            />
            <Card
              title="Build Amazing Things"
              content="Create powerful web applications with modern tools and best practices."
            />
            <Card
              title="Learn and Grow"
              content="Explore the features and components of this application to enhance your skills."
            />
          </div>
        </section>

        {/* Post Modal Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Create a Post</h2>
          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Open Post Modal
          </Button>
          
          {newPost && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Your New Post:</h3>
              <PostCard
                title={newPost.title}
                content={newPost.content}
                userId={newPost.userId}
              />
            </div>
          )}
        </section>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handlePostSubmit}
        />
      </main>
    </div>
  );
};

export default HomePage;
