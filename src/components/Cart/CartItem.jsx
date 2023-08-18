import { AddCircleOutline, DeleteOutline, RemoveCircleOutline } from "@mui/icons-material"
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import PropTypes from "prop-types"

const CartItem = ({ item, increaseqnt, decreaseqnt, deleteFromCart, dispatch }) => {
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
                {item.qnt > 1 ?
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <IconButton onClick={() => decreaseqnt(dispatch, item.id)} aria-label="Decrease">
                                <RemoveCircleOutline sx={{ fontSize: '42px', color: '#eab308' }} />
                            </IconButton>
                            <Typography>{item.qnt}</Typography>
                            <IconButton onClick={() => increaseqnt(dispatch, item.id)} aria-label="Increase">
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
                            <Typography>{item.qnt}</Typography>
                            <IconButton onClick={() => increaseqnt(dispatch, item.id)} aria-label="Increase">
                                <AddCircleOutline sx={{ fontSize: '42px', color: '#84cc16' }} />
                            </IconButton>
                        </Box>
                    </>
                }


            </CardActions>
        </Card>
    )
}

CartItem.propTypes = {
    item: PropTypes.object,
    increaseqnt: PropTypes.func,
    decreaseqnt: PropTypes.func,
    deleteFromCart: PropTypes.func,
    dispatch: PropTypes.func,
}

export default CartItem
