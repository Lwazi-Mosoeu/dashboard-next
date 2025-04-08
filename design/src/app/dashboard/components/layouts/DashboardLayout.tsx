import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white py-4 px-8 shadow">
        <h1 className="text-xl font-bold">Trade Dashboard</h1>
      </header>
      <main className="flex-1 p-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
