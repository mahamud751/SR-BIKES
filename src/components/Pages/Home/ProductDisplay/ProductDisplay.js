import { Card, CardActions, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from '@mui/icons-material/ExpandMore';



const ProductDisplay = ({ product, setBookingSuccess }) => {
    const { _id, name, img, description, price } = product

    return (
        <>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardMedia
                        component="img"
                        style={{ width: "100%", height: "300px" }}
                        // height="550"
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        {/* <Typography variant="h5" component="div">

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography> */}
                        <Typography variant="body2">
                            {description.slice(0, 120)}
                        </Typography>
                    </CardContent>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: 5
                    }}>
                        <Typography variant="h5">
                            {<AttachMoneyIcon fontSize="large" />}{price}
                        </Typography>
                        <Typography variant="h4">
                            <Link to={`/booking/${_id}`}> <Button variant="contained">Purchase</Button></Link>
                        </Typography>
                    </div>

                </Card>
            </Grid>





        </>

    );
};

export default ProductDisplay;