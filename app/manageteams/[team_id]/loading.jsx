import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="inline-block relative w-80 h-80">
        <div className="border-t-4 border-green-500 border-solid animate-spin rounded-full w-32 h-32"></div>
      </div>
    </div>
  );
}

export default Loading;
