import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ProductDisplay from '../Home/ProductDisplay/ProductDisplay';


const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <h1 className="m-5">Explore Bikes</h1>
                <Grid container spacing={2}>
                    {
                        products.map(product => <ProductDisplay
                            product={product}
                        ></ProductDisplay>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Explore;