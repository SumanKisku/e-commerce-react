import { Grid } from "@mui/material";
import { store } from '../../../store'
import ProductCard from "./ProductCard";

const allProducts = [...store];

const Store = () => {

    return (
        <Grid container alignItems="stretch" spacing={4}>
            {
                allProducts.map((product) => {
                    return <ProductCard key={product.id} prod={product} />
                })
            }
        </Grid>
    )
}

export default Store
