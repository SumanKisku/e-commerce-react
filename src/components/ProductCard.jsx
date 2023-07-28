import { Box, Button, Card, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-hot-toast";

const addToCart = (dispatch, productId) => {
    dispatch({ type: "addToCart", id: productId });
    toast.success("Item added to cart", {
        style: {
            border: '1px solid #1976d2',
            padding: '16px',
            color: '#1976d2',
        },
        iconTheme: {
            primary: 'green',
            secondary: '#FFFAEE',
        },
    });
};


const ProductCard = ({ prod }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <Grid key={prod.id} item xs={12} sm={4} md={3}>
            <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={`${prod.thumbnail}`}
                    title={`${prod.title}`}
                    loading="lazy"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {prod.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {prod.description}
                    </Typography>
                </CardContent>
                <Box sx={{ padding: "0 16px" }}>
                    <Rating name="read-only" value={prod.rating} precision={0.5} readOnly />
                </Box>
                <Box sx={{ padding: "0 16px" }}>
                    <Typography variant="body2" component="h6">
                        Price <Typography variant="h4" component="span">{prod.price}</Typography>
                    </Typography>
                </Box>
                {/* // FIXME: when clicked on button, if we click the cart icon instead the whole button we get the event object of the svg */}
                <Button data-key={prod.id} variant="outlined" color="primary" startIcon={<AddShoppingCartIcon />} onClick={() => addToCart(dispatch, prod.id)}>
                    Add To Cart</Button>
            </Card>
        </Grid>
    )
}

export default ProductCard
