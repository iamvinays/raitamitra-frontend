import React, { Component } from 'react';
import ProductGrid from '../components/ProductGrid';
import '../styles/pages/products.scss';

class Products extends Component {
    render() {
        return (
            <div className="products">
                <h1>PRODUCTS</h1>
                <div className="container">
                    <ProductGrid />
                </div>
            </div>
        )
    }
}

export default Products;