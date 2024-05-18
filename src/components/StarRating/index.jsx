import { useState } from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";
const StarRating = ({ numberOfStars = 5 }) => {
   const [rating, setRating] = useState(0);
   const [hover, setHover] = useState(0);

   const handleClick = (getCurrentIndex) => {
      // console.log("on click", getCurrentIndex);
      setRating(getCurrentIndex);
   };
   const handleMouseLeave = () => {
      // console.log("on move", getCurrentIndex);
      setHover(rating);
   };
   const handleMouseMove = (getCurrentIndex) => {
      // console.log("on leave", getCurrentIndex);
      setHover(getCurrentIndex);
   };
   return (
      <div className="star-rating">
         {[...Array(numberOfStars)].map((_, index) => {
            index += 1;
            return (
               <FaStar
                  key={index}
                  className={index <= (hover || rating) ? "active" : "inactive"}
                  onClick={() => handleClick(index)}
                  onMouseMove={() => handleMouseMove(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  size={30}
               />
            );
         })}
      </div>
   );
};

export default StarRating;
