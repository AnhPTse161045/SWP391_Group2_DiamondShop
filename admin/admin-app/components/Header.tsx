import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span>Welcome, User</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </header>
  );
};

export default Header;
