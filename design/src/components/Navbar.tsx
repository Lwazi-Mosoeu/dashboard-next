import React from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import {
  LayoutDashboard,
  PieChart,
  Table,
  PlusCircle,
  Bell,
  User,
} from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 border-b bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Left - Navigation Links */}
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                href="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/charts"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <PieChart className="h-5 w-5" />
                <span className="sr-only">Charts</span>
              </Link>
            </li>
            <li>
              <Link
                href="/tradetable"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <Table className="h-5 w-5" />
                <span className="sr-only">Trade Table</span>
              </Link>
            </li>
          </ul>

          {/* Right - User Actions */}
          <ul className="flex gap-4 items-center">
            <li>
              <button
                type="button"
                className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
              >
                <PlusCircle className="h-5 w-5" />
                <span className="sr-only">Add Record</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center justify-center h-8 w-8 rounded-full text-gray-700 hover:text-gray-900"
              >
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center justify-center h-8 w-8 rounded-full text-gray-700 hover:text-gray-900"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">User Profile</span>
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
