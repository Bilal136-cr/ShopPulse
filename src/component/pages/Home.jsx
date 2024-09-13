import React from "react";
import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import ProductCategory from "./ProductCategory";
import Shoping from "./Shoping";
import Why from "./Why";
import JoinOurList from "./JoinOurList";
import Blog from "./Blog";

function Home() {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <ProductCategory />
      <Shoping />
      <Why />
      <JoinOurList />
      <Blog />
    </div>
  );
}
export default Home;
