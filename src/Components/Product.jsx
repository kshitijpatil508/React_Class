import React from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  const { userid } = useParams();
  return <div>product :{userid}</div>;
};

export default Product;
