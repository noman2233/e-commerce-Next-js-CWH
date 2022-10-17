import axios from "axios";
import Link from "next/link";
import Products from "./Products";

const ProductCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="">
      <Products data={data} />

    </div>
  );
};



      export default ProductCard;