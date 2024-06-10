import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
   const [images, setImages] = useState([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const [errorMsg, setErrorMsg] = useState(null);
   const [loading, setLoading] = useState(false);

   const fetchImage = async (getUrl) => {
      try {
         setLoading(true);
         const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
         const data = await response.json();

         if (data) {
            setImages(data);
            setLoading(false);
         }
      } catch (e) {
         setErrorMsg(e.message);
         setLoading(false);
      }
   };
   const handleLeft = () => {
      setCurrentSlide(
         currentSlide === 0
            ? (currentSlide = images.length - 1)
            : currentSlide - 1
      );
   };
   const handleRight = () => {
      setCurrentSlide(
         currentSlide === images.length - 1
            ? (currentSlide = 0)
            : currentSlide + 1
      );
   };

   useEffect(() => {
      if (url !== "") fetchImage(url);
   }, [url]);
   console.log(images);

   if (loading) {
      return <div>Loading data! please wait</div>;
   }
   if (errorMsg !== null) {
      return <div>Error occured ! {errorMsg}</div>;
   }

   return (
      <div className="container">
         <BsArrowLeftCircleFill
            onClick={handleLeft}
            className="arrow arrow-left"
         />
         {images && images.length
            ? images.map((image, index) => (
                 <img
                    src={image.download_url}
                    alt={image.download_url}
                    key={image.id}
                    className={
                       currentSlide === index
                          ? "current-image "
                          : "current-image current-image-inactive"
                    }
                 />
              ))
            : null}
         <BsArrowRightCircleFill
            className="arrow arrow-right"
            onClick={handleRight}
         />
         <span className="circle-indicators">
            {images && images.length
               ? images.map((_, index) => (
                    <button
                       key={index}
                       className={
                          currentSlide === index
                             ? "current-indicator"
                             : "indicator-inactive"
                       }
                       onClick={() => setCurrentSlide(index)}
                    ></button>
                 ))
               : null}
         </span>
      </div>
   );
}
