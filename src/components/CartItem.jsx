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
            <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {item.qtn > 1 ?
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconButton onClick={() => decreaseQtn(dispatch, item.id)} aria-label="Decrease">
                                <RemoveCircleOutline sx={{ fontSize: '42px', color: '#eab308' }} />
                            </IconButton>
                            <Typography>{item.qtn}</Typography>
                            <IconButton onClick={() => increaseQtn(dispatch, item.id)} aria-label="Increase">
                                <AddCircleOutline sx={{ fontSize: '42px', color: '#84cc16' }} />
                            </IconButton>
                        </Box>
                        <IconButton onClick={() => deleteFromCart(dispatch, item.id)} aria-label="Delete">
                            <DeleteOutline sx={{ fontSize: '2rem', color: 'red' }} />
                        </IconButton>
                    </> :
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconButton onClick={() => deleteFromCart(dispatch, item.id)} aria-label="Delete">
                                <DeleteOutline sx={{ fontSize: '42px', color: 'red' }} />
                            </IconButton>
                            <Typography>{item.qtn}</Typography>
                            <IconButton onClick={() => increaseQtn(dispatch, item.id)} aria-label="Increase">
                                <AddCircleOutline sx={{ fontSize: '42px', color: '#84cc16' }} />
                            </IconButton>
                        </Box>
                    </>
                }


            </CardActions>
        </Card>
    )
}

export default CartItem