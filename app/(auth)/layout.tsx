import React from "react";
type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
