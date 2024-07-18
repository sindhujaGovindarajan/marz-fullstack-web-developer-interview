import React, { useEffect, useState } from "react";
import PageWrapper from "../PageWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";

interface Product {
  ProductID: number;
  ProductName: string;
  ProductPhotoURL: string;
  ProductStatus: string;
}

const ProductsPage: React.FC = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts([
      {
        ProductID: 1,
        ProductName: "dummyPdt1",
        ProductPhotoURL: "dummyImgUrl1",
        ProductStatus: "Active",
      },
      {
        ProductID: 2,
        ProductName: "dummyPdt2",
        ProductPhotoURL: "dummyImgUrl2",
        ProductStatus: "Active",
      },
    ]);
  }, []);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products?.map((product) => (
            <ProductCard
              key={product.ProductID}
              id={product.ProductID}
              name={product.ProductName}
              imageUrl={product.ProductPhotoURL}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductsPage;
