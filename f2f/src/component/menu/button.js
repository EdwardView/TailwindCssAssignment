import React from "react";

export const Button = () => {
  return (
    <div className="flex justify-center items-center bg-red-600 w-44 h-12 rounded-md">
      <div className="flex gap-x-4">
        <div className="text-sm text-white">Create new meal</div>
        <div className="w-4 h-4">
          <img src="./assets/PNG/plus.png" alt="Plus" />
        </div>
      </div>
    </div>
  );
};

export default Button;
