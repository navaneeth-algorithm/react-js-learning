import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/base/Header";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <main className="grid grid-cols-[15rem_1fr] flex-grow">
          {/* Sidebar navigation */}
          <div className="sidebar">
            <Navbar />
          </div>

          {/* Content area */}
          <div className="flex-grow min-h-screen bg-gray-100 ">
            <Header />
            <div className='p-4'>
            {children}
            </div>
            
          </div>
        </main>
      </body>
    </html>
  );
}
