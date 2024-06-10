import "./App.css";
// import Accordian from "./components/Accordian/Accordian";
// import RandomColor from "./components/RandomColor";
// import StarRating from "./components/StarRating";
// import ImageSlider from "./components/ImageSlider";
// import LoadMore from "./components/LoadMore";
import MenuUI from "./components/Menu";
import menus from "./components/Menu/data";

function App() {
   return (
      <>
         {/* <Accordian /> */}
         {/* <RandomColor /> */}
         {/* <StarRating numberOfStars={10} /> */}
         {/* <ImageSlider
            url={"https://picsum.photos/v2/list"}
            limit={"15"}
            page={"1"}
         /> */}
         {/* <LoadMore /> */}
         <MenuUI menus={menus} />
      </>
   );
}

export default App;
