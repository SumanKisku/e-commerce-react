import { Container, Paper, Typography, Button } from '@mui/material';
import { Link } from "react-router-dom"; 

const PaymentSuccessfulPage = () => {
    return (
        <Container maxWidth="md" className="my-8 mt-20">
            <Paper elevation={3} className="p-6">
                <Typography variant="h4" align="center" className="mb-4">
                    Payment Successful
                </Typography>
                <Typography variant="body1" align="center" className="mb-6">
                    Thank you for your payment. Your order has been successfully processed.
                </Typography>
                <div className="flex justify-center">
                    <Button variant="contained" color="primary">
                        <Link to="/">Continue Shopping</Link>
                    </Button>
                </div>
            </Paper>
        </Container>
    );
};

export default PaymentSuccessfulPage;
