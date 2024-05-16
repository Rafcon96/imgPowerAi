import React from "react";

type Props = { title: string; subtitle?: string };
const Header: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="h2-bold text-slate-600">{title}</h2>
      {subtitle && (
        <p className="text-slate-600/80 p-16-regular mt-4">{subtitle}</p>
      )}
    </>
  );
};

export default Header;
