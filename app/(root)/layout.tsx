import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="root bg-slate-800 root-container">
      <div className="">
        <Sidebar />
        <MobileNav />
      </div>
      <div className="wrapper">{children}</div>
      <Toaster />
    </main>
  );
};

export default Layout;
