import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductDisplay from '../ProductDisplay/ProductDisplay';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://quiet-springs-52854.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <Container>
            <h1 className="m-3">Upcoming Events</h1>

            <Grid container spacing={2}>
                {
                    products.map(product => <ProductDisplay
                        product={product}
                    ></ProductDisplay>)
                }
            </Grid>
        </Container >
    );
};

export default Products;