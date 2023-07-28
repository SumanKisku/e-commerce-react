import { AddCircleOutline, DeleteOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"

const CartItem = ({ item, increaseQtn, decreaseQtn, deleteFromCart, dispatch }) => {
    return (
        <Card sx={{ marginBottom: '20px' }} variant="outlined">

            <CardMedia
                sx={{ height: 240 }}
                image={item.thumbnail}
                title="green iguana"
                loading="lazy"
            />
            <CardHeader title={`${item.title}`} />

            <CardContent>
                <Typography gutterBottom variant="h6" component="div">Price: {item.price}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton onClick={() => decreaseQtn(dispatch, item.id)} aria-label="Decrease">
                    <RemoveCircleOutline sx={{ fontSize: '42px' }} />
                </IconButton>
                <Typography>{item.qtn}</Typography>
                <IconButton onClick={() => increaseQtn(dispatch, item.id)} aria-label="Increase">
                    <AddCircleOutline sx={{ fontSize: '42px' }} />
                </IconButton>
                <IconButton onClick={() => deleteFromCart(dispatch, item.id)} aria-label="Delete">
                    <DeleteOutline sx={{ fontSize: '42px' }} />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default CartItem