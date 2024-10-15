import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-row text-center justify-center gap-4 w-60 m-auto p-auto">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default LoadingSpinner;
