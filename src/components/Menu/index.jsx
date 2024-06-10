import React from "react";
import MenuList from "./menu-list";

const MenuUI = ({ menus = [] }) => {
   return (
      <div className="menu-view-container">
         <MenuList list={menus} />
      </div>
   );
};
export default MenuUI;
