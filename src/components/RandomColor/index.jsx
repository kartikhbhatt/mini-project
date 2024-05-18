import { useEffect, useState } from "react";

export default function RandomColor() {
   const [typeOfColor, setTypeOfColor] = useState("hex");
   const [color, setColor] = useState("black");

   const randomColorUtility = (len) => {
      return Math.floor(Math.random() * len);
   };
   const handleChangeColor = (prop) => {
      if (prop === "hex") {
         const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
         let hexColor = "#";

         for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
         }
         setColor(hexColor);
      } else {
         const r = randomColorUtility(256);
         const g = randomColorUtility(256);
         const b = randomColorUtility(256);
         setColor(`rgb(${r}, ${g}, ${b})`);
      }
   };
   useEffect(() => {
      handleChangeColor();
   }, [typeOfColor]);

   return (
      <div
         style={{
            width: "100vw",
            height: "100vh",
            background: color,
         }}
      >
         <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
         <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
         <button onClick={() => handleChangeColor(typeOfColor)}>
            Generate Random Color
         </button>
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               color: "#fff",
               fontSize: "60px",
               marginTop: "50px",
               flexDirection: "column",
            }}
         >
            <h3>{typeOfColor}</h3>
            <h1>{color}</h1>
         </div>
      </div>
   );
}
