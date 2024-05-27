import React from 'react';
import Sidebar from '@/components/SideBar';
import Header from '@/components/Header';
import PageWrapper from '@/components/PageWrapper';

const HomePage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <PageWrapper>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
            <p className="mt-4 text-gray-600">
              This is a sample admin dashboard built with Next.js and Tailwind CSS.
            </p>
            
          </div>
          
        </PageWrapper>
      </div>
    </div>
  );
};

export default HomePage;
