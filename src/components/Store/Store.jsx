import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { store } from "../../../store";
import ProductCard from "./ProductCard";
import CategorySlider from "./CategorySlider"

const allProducts = [...store];

let categories = ["all"];
allProducts.forEach((prod) => {
  if(!categories.includes(prod.category)) {
    categories.push(prod.category);
  }
})

const Store = () => {
  const [selected, setSelected] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([...allProducts]);

  const handleSelect = (select) => {
    setSelected(select);
  }

  useEffect(()=> {
    if(selected != "all") {
      setFilteredProducts(allProducts.filter((prod) => prod.category === selected));
    }else {
      setFilteredProducts([...allProducts]);
    };
  },[selected])

  return (
    <>
      <CategorySlider categories={categories} selected={selected} onSelect={handleSelect} />
      <Grid container alignItems="stretch" spacing={4}>
        {
          filteredProducts.map((product) => {
            return <ProductCard key={product.id} prod={product} />
          })
        }
      </Grid>
    </>
  )
}

export default Store
