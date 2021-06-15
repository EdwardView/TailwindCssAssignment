import React from "react";
import Button from "./button";

const MenuOption = [
  "Over View",
  "Meals",
  "User Account",
  "Order History",
  "Calender",
];

const CommunityOption = ["Reviews", "User Recipies"];

export const Menu = () => {
  const SubList = (option) => {
    return (
      <div className="flex my-2 gap-x-2">
        <img className="w-4 h-4" src="./assets/PNG/view-details.png" alt="" />
        <div className="text-xs text-gray-500">{option}</div>
      </div>
    );
  };
  return (
    <div className="m-8">
      <img
        className="w-12 h-12 rounded-full mb-4"
        src="./assets/JPEG/images.jpeg"
        alt="profile"
      />
      <span className="text-lg font-bold">Hello ! James</span>
      <div className="mb-4">
        <span className="text-gray-500">Your Plan : </span>
        <span className="text-red-500 font-bold">Free</span>
      </div>
      <Button />
      <div>
        <h1 className="font-bold text-sm text-red-500 mt-8 text-base">MENU</h1>
        <div className="flex flex-col ml-8 mt-2">
          {MenuOption.map((option) => SubList(option))}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-sm text-red-500 mt-4 text-base">
          Community
        </h1>
        <div className="flex flex-col ml-8 mt-2">
          {CommunityOption.map((option) => SubList(option))}
        </div>
      </div>

      <div className="flex ml-8 mt-8 gap-x-2">
        <img className="w-4 h-4" src="./assets/PNG/view-details.png" alt="" />
        <div className="text-sm text-gray-500">Log Out</div>
      </div>
    </div>
  );
};
export default Menu;
