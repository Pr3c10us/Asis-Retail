// Create a LoadingSpinner component (or you can use a library like react-loader-spinner)
import React from "react"

const Loading = () => {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-[#ffff] z-50 ">
<div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#0B0B0B]"></div>
      </div>
      </div>
      
    );
  };
  
  export default Loading;