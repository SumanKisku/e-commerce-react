import { Button } from "@mui/material"

const PaymentButton = ({ amount }) => {

    const handleClick = () => {
        console.log(amount);
    }
    return (
        <Button sx={{ textAlign: 'center' }} variant="contained" onClick={handleClick}>Procced to Buy</Button>
    )
}

export default PaymentButton
