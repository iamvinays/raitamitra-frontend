import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/components/productGrid.scss';

class ProductGrid extends Component {
    render() {
        return (
            <div className="product-grid">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        )
    }
}

export default ProductGrid;