import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm">
      <div className="flex h-full items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-t-4 border-t-asisDark"></div>
      </div>
    </div>
  );
};

export default Loading;
