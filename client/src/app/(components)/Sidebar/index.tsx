"use client";

import { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
    w-64
  `;
  // ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}
  return <div className={sidebarClassNames}>Sidebar</div>;
};

export default Sidebar;
