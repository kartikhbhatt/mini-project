import React, { useState } from "react";
import MenuList from "./menu-list";

function MenuItem({ item }) {
   const [displayCurrentChildren, setDisplayCurrentChildren] = useState([]);

   const handleChildren = (getCurrentLabel) => {
      setDisplayCurrentChildren({
         ...displayCurrentChildren,
         [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      });
   };
   return (
      <li>
         <div
            style={{ display: "flex", gap: "20px" }}
            onClick={() => handleChildren(item.label)}
         >
            <p>{item.label}</p>
            {item && item.children && item.children.length ? (
               <span>{displayCurrentChildren[item.label] ? "-" : "+"}</span>
            ) : null}
         </div>
         {item &&
         item.children &&
         item.children.length > 0 &&
         displayCurrentChildren[item.label] ? (
            <MenuList list={item.children} />
         ) : null}
      </li>
   );
}

export default MenuItem;
