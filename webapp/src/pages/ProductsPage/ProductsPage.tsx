import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
import { Product } from "../../components/interfaces";
import { getProductsData } from "../ApiHelper";
import PageWrapper from "../PageWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

const DATA_STATES = {
  waiting: "WAITING",
  loaded: "LOADED",
  error: "ERROR",
};

const ProductsPage = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [products, setProducts] = useState([] as Product[]);
  const [activeProducts, setActiveProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { productsData, errorOccured } = await getProductsData();
    setProducts(productsData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (products.length) {
      setActiveProducts(
        products.filter(({ ProductStatus }) => ProductStatus === "Active")
      );
    }
  }, [products]);

  let content;
  if (loadingState === DATA_STATES.waiting)
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.loaded)
    content = (
      <div data-testid="products-container">
        <h1 className="text-gray-600 text-xl font-bold mb-2">Products</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 items-center justify-between w-full">
          {activeProducts?.map((activeProduct) => (
            <ProductCard key={activeProduct.ProductID} {...activeProduct} />
          ))}
        </div>
      </div>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );
  return (
    <PageWrapper>
      <div className="container">
        {/* for SEO  */}
        {/* <Helmet>
          <title>Monsters Aliens Robots Zombies VFX - Products</title>
          <meta name="description" content="MARZ active products" />
        </Helmet> */}
        {content}
      </div>
    </PageWrapper>
  );
};

export default ProductsPage;
