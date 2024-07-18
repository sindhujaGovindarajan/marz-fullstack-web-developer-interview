import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../PageWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";

interface ActiveProduct {
  ProductID: number;
  ProductName: string;
  ProductPhotoURL: string;
}

const ProductsPage: React.FC = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
  const [activeProducts, setActiveProducts] = useState<ActiveProduct[]>([]);
  const products = [
    {
      ProductID: 1,
      ProductName: "Ant-Man and the Wasp: Quantumania (Marvel Studios)",
      ProductPhotoURL:
        "https://i.vimeocdn.com/video/1625345672-870e3bd5cf157f98e03717b654878072d7b573d07d5319d07bf504ea1b97e6c8-d?mw=900&mh=507&q=70",
      ProductStatus: "Active",
    },
    {
      ProductID: 2,
      ProductName: "Master Showreel",
      ProductPhotoURL:
        "https://i.vimeocdn.com/video/1836529810-e1db005ef64f60d148ce42dd48925cee4c5b5593e987790ae74c040c471d0ae9-d?mw=900&mh=507&q=70",
      ProductStatus: "InActive",
    },
  ];
  useEffect(() => {
    setActiveProducts(
      products.filter(({ ProductStatus }) => ProductStatus === "Active")
    );
  }, []);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4">
        <Helmet>
          <title>Monsters Aliens Robots Zombies VFX - Products</title>
          <meta name="description" content="MARZ active products" />
        </Helmet>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {activeProducts?.map((activeProduct) => (
            <ProductCard
              key={activeProduct.ProductID}
              id={activeProduct.ProductID}
              name={activeProduct.ProductName}
              imageUrl={activeProduct.ProductPhotoURL}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductsPage;
