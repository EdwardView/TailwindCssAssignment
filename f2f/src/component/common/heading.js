import React from "react";

export const Heading = ({ title, count }) => {
  return (
    <div class="flex justify-between py-5 ">
      <div class="text-black-700 underline text-xl">{title}</div>
      <div class="text-red-700">
        view all {count} {title}
      </div>
    </div>
  );
};
