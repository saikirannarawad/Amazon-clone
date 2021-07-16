import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
      />

      {/* Product id , title , price , rating , image */}

      <div className="home__row">
        <Product
          id="1"
          title="Pedigree Adult Dry Dog Food, Chicken & Vegetables, 11Kg Pack"
          price={1974}
          rating={5}
          image="https://m.media-amazon.com/images/I/81kpT9DqMAL._AC_UL480_FMwebp_QL65_.jpg"
        />

        <Product
          id="2"
          title="Pedigree Adult Dry Dog Food (High Protein Variant) Chicken, Egg & Rice, 20kg Pack "
          price={3610}
          rating={5}
          image="https://m.media-amazon.com/images/I/61hJloa+ZYL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Dear Pet Majestic Unicorns Cyan, White Cotton Shirt for Small, Medium, Large Dogs - (Large)"
          price={959}
          rating={4}
          image="https://m.media-amazon.com/images/I/71odRBaDkvL._AC_UL480_FMwebp_QL65_.jpg"
        />

        <Product
          id="4"
          title="ULTECHNOVO 4pcs Summer Dog Vest "
          price={862}
          rating={5}
          image="https://m.media-amazon.com/images/I/71v5P7L2OMS._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="5"
          title="Ruse Basic Summer Dog T-Shirt"
          price={649}
          rating={5}
          image="https://m.media-amazon.com/images/I/61tWYemRXML._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Emily Pets Hat Cap Protect Pets Eye Strong Sun Lights"
          price={351}
          rating={3}
          image="https://m.media-amazon.com/images/I/416KhYo56UL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
