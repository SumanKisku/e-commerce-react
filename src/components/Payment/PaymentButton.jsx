import { Button } from "@mui/material"
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";



const PaymentButton = () => {
    const { dispatch } = useContext(CartContext);

    const handleClick = () => {
        dispatch({ type: "clearCart" });
    }
    return (
        <Button sx={{ textAlign: 'center' }} variant="contained" onClick={handleClick}>
      <Link to="/paymentsuccess">
        Procced to Buy
      </Link>
    </Button>
  )
}

export default PaymentButton
