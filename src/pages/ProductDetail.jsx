import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';

const ProductDetail = () => {
    return (
        <div className='bg-white py-5 pt-20 pb-10'>
            <ProductItem/>
        </div>
    );
};

export default ProductDetail;