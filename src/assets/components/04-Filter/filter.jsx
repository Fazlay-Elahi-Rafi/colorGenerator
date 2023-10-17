import React, { useState } from "react";
import "./style.css";

import Product from "./filterData";
import Menu from "./menu";

export default function Filter() {
  const [products, setProducts] = useState(Product);

  const allCategories = [
    "all",
    ...new Set(Product.map((cate) => cate.category)),
  ];

  const filterFun = (category) => {
    if (category === "all") {
      setProducts(Product);
      return;
    }

    const newProduct = Product.filter((item) => item.category === category);

    setProducts(newProduct);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {allCategories.map((cate, index) => {
            return (
              <button
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterFun(cate)}
              >
                {cate}
              </button>
            );
          })}
        </div>
        <Menu items={products} />
      </section>
    </main>
  );
}
