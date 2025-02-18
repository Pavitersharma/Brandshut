import React from "react";
import ListingItem from "./ListingItem";
import Filter from "./Filter";

export default function Listing() {
  return (
    <>
      <div className="container py-4">
      <h3>Mens TopWear</h3>
      <p>If you want to stay on top of the fashion trends, then you need to shop for the latest and trendiest topwear from an e-commerce site Flipkart. Check out the amazing collection of topwear for women online and select the ones that suit you the best. Browse through stylish women’s topwear that are offered by popular brands, such as Only, Jockey, U&F, Darzi, Ann Springs, and more.From T-shirts and tops to shirts and frocks, you can find fashionable and comfortable clothes online for your little ones. The information you are reading has been last updated on 18-Feb-25.</p>
        <div className="listing">
          <Filter />
          <div className="product-list">
            <ListingItem price={287} discount={10} />
            <ListingItem price={503} discount={12} />
            <ListingItem price={200} discount={14} />
            <ListingItem price={300} discount={54} />
            <ListingItem price={450} discount={9} />
          </div>
        </div>
      </div>
    </>
  );
}
