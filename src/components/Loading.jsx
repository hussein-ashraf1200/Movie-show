import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[80vh]">
        <div className=" animate-spin rounded-full h-14 w-14 border-2 border-primary border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loading;
