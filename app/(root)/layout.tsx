import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="root">
      <div className="root-container bg-slate-800">
        <Sidebar />
        <MobileNav />
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
