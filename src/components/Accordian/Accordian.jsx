import { useState } from "react";
import data from "./Data";

const Accordian = () => {
   const [getId, setGetId] = useState(false);

   const handleExpand = (id) => {
      setGetId(getId === id ? null : id);
   };

   return (
      <div className="section-accordian flex flex-col  ">
         {data &&
            data.map((item) => (
               <div className="accordian-content m-3" key={item.id}>
                  <div
                     className="question"
                     onClick={() => handleExpand(item.id)}
                  >
                     <b>{item.question}</b>
                     <span>+</span>

                     {getId === item.id && <p>{item.answer}</p>}
                  </div>
               </div>
            ))}
      </div>
   );
};

export default Accordian;
