import React from 'react';
import Sidebar from '@/components/SideBar';
import Header from '@/components/Header';
import PageWrapper from '@/components/PageWrapper';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full ml-64">
        <Header />
        <PageWrapper>
          {children}
        </PageWrapper>
      </div>
    </div>
  );
};

export default DashboardLayout;
