import React, { Component } from 'react';
import '../styles/components/productCard.scss';

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card">
                <div className="top">
                    <img src="https://citainsp.org/wp-content/uploads/2016/01/default.jpg" title="" className="" alt="product photos" />
                </div>
                <div className="bottom">
                    <div className="bottom-wrapper">
                        <h4>Product Name</h4>
                        <div className="detail-wrapper">
                            <div className="details">
                                <span className="left-part">Quantity:</span>
                                <span className="right-part">5KG</span>
                            </div>
                            <div className="details">
                                <span className="left-part">MRP:</span>
                                <span className="right-part">₹1000</span>
                            </div>
                            <div className="details">
                                <span className="left-part">Offer:</span>
                                <span className="right-part">40%</span>
                            </div>
                            <div className="details">
                                <span className="left-part">Selling Price:</span>
                                <span className="right-part">₹600</span>
                            </div>
                            <div className="details">
                                <span className="left-part">Availability:</span>
                                <span className="right-part">Coming Soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;