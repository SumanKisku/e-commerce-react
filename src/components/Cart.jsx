/* eslint-disable no-case-declarations */

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const deleteFromCart = (dispatch, productId) => {
    dispatch({ type: "deleteFromCart", id: productId });
}

const increaseQtn = (dispatch, productId) => {
    dispatch({ type: "increaseQtn", id: productId });
}
const decreaseQtn = (dispatch, productId) => {
    dispatch({ type: "decreaseQtn", id: productId });
}

const clearCart = (dispatch) => {
    toast.error("Cart cleared", {
        style: {
            border: '1px solid #1976d2',
            padding: '16px',
            color: '#1976d2',
        },
        iconTheme: {
            primary: 'red',
            secondary: '#FFFAEE',
        },
    });
    dispatch({ type: "clearCart" });
}

const calSubTotal = (cart) => {
    return cart.reduce((total, item) => item.price * item.qtn + total, 0)
}

const caltotalItemsInCart = (cart) => {
    return cart.reduce((total, item) => item.qtn + total, 0)
}

const handlePay = () => {
    toast('Will implement later', {
        icon: '⚠️',
        style: {
            border: '1px solid #1976d2',
            padding: '16px',
            color: '#1976d2',
        },
        iconTheme: {
            primary: 'yellow',
            secondary: '#FFFAEE',
        },
    });
}

const Cart = () => {

    const { cart, dispatch } = useContext(CartContext);
    const [subTotal, setSubtotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        setSubtotal(calSubTotal(cart));
        setTotalItems(caltotalItemsInCart(cart));
    }, [cart])

    return (
        <>
            <div style={{ margin: '100px 0' }}>
                <Container maxWidth="sm">
                    {cart.length ? cart.map((item) => {
                        return <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} increaseQtn={increaseQtn} decreaseQtn={decreaseQtn} dispatch={dispatch} />
                    }) : "Oh no, your cart is empty! 😢 Don't worry, we have plenty of amazing products for you to choose from."}
                    <Box>
                        {cart.length ? "" :
                            <Typography variant="body1" align="center" fontWeight="bold">
                                <Link to={"/"}>Go to Store</Link>
                            </Typography>
                        }
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                        {cart.length ? <IconButton sx={{ color: 'red' }} onClick={() => clearCart(dispatch)} aria-label="Clear Cart">
                            <DeleteForeverIcon />
                            <Typography variant="body1" fontWeight="bold">Clear Cart</Typography>
                        </IconButton> : ""}
                    </Box>
                    <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }} direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}>
                        <Typography sx={{}} variant="body1" fontWeight="bold">
                            {cart.length ? `Subtotal: ${subTotal} (${totalItems} items)` : ``}
                        </Typography>
                        {cart.length ? <Button sx={{ textAlign: 'center' }} variant="contained" onClick={handlePay}>Procced to Buy</Button> : ""}
                    </Stack>

                </Container>
            </div >

        </>
    )
}

export default Cart
