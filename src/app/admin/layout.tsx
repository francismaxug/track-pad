import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex">
      <aside className=" bg-slate-200 p-5 mr-5">Admin SideBar</aside>
      <div>{children}</div>
    </div>
  );
};

export default layout;
