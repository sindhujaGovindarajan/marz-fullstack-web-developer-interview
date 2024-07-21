import React from "react";
import { Product } from "../interfaces";

const ProductCard: React.FC<Product> = (props) => {
  return (
    <div
      className="bg-slate-100 max-w-sm rounded overflow-hidden"
      data-testid={`product-card-${props.ProductID}`}
    >
      <img
        className="w-full"
        src={props.ProductPhotoURL}
        alt={props.ProductName}
      />
      <div className="px-6 py-4">
        <div className="text-gray-600 font-bold text-xl mb-2">
          {props.ProductName}
        </div>
        <p className="text-gray-700 text-base">
          ID: {props.ProductID}{" "}
          {props.ProductStatus === "InActive" && `(Inactive)`}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
