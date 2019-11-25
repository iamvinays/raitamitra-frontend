import React, { Component } from 'react';
import '../styles/components/productCard.scss';
import '../styles/includes/boxShadowEffects.scss';

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card-wrapper">
                <div className="product-card effect7">
                    <div className="top">
                        <img src="" title="" className="" />
                    </div>
                    <div className="bottom">
                        <h4></h4>
                        <div className="detail-wrapper">
                            <div className="left-part">

                            </div>
                            <div className="right-part">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;