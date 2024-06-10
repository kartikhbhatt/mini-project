import react, { useEffect, useState } from "react";
import "./style.css";

const LoadMore = () => {
   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);
   const [count, setCount] = useState(0);
   const [disableButton, setDisableButton] = useState(false);

   const fetchProducts = async () => {
      try {
         setLoading(true);
         const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${
               count === 0 ? 0 : count * 20
            }`
         );
         const data = await response.json();

         if (data && data.products && data.products.length) {
            setProducts((prevData) => [...prevData, ...data.products]);
            setLoading(false);
         }

         console.log(data);
      } catch (err) {
         console.log(err);
         setLoading(false);
      }
   };
   useEffect(() => {
      fetchProducts();
   }, [count]);
   useEffect(() => {
      if (products && products.length === 100) setDisableButton(true);
   }, [products]);

   if (loading) {
      return <div>fetching your data. please wait</div>;
   }
   return (
      <div className="container">
         <div className="product-container">
            {products && products.length
               ? products.map((product) => (
                    <div className="product" key={product.id}>
                       <img src={product.thumbnail} alt={product.title} />
                       <h3>{product.title}</h3>
                       {/* <h3>{product.price}</h3>
                       <h3>{product.rating}</h3> */}
                    </div>
                 ))
               : null}
         </div>
         <div className="btn-container">
            <button
               disabled={disableButton}
               onClick={() => setCount(count + 1)}
            >
               Load-More
            </button>
            {disableButton ? <p>You have reached the end of the list</p> : null}
         </div>
      </div>
   );
};

export default LoadMore;
