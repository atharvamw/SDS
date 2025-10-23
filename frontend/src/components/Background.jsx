import React from "react";

const Bg = ({children}) => {
  return (
    <div className={"min-h-screen bg-black text-white overflow-hidden relative"}>
      {/* Animated Background Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.07)_3px,transparent_3px),linear-gradient(90deg,rgba(59,130,246,0.07)_3px,transparent_3px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]"></div>
      </div>
      
      {/* Main content wrapper with a higher z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Bg;