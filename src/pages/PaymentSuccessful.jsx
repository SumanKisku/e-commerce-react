import { useState } from "react";
import { Container, Paper, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom"; 


const PaymentSuccessfulPage = () => {

  setTimeout(() => {
   setPaymentDone(true); 
  }, 1500);

  const [paymentDone, setPaymentDone] = useState(false);
  return (

    <Container maxWidth="md" className="my-8 mt-20">
      {
        !paymentDone ?

          <svg
            className="animate-spin h-16 w-16 text-blue-500 mx-auto mt-40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          : 
          <Paper elevation={3} className="p-6">
            <Typography variant="h4" align="center" className="mb-4">
              Payment Successful
            </Typography>
            <Typography variant="body1" align="center" className="mb-6">
              Thank you for your payment. Your order has been successfully processed.
            </Typography>
            <div className="flex justify-center mt-8">
              <Button variant="contained" color="primary">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </Paper>
      }
    </Container>
  );
};

export default PaymentSuccessfulPage;
