import React, { Component } from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/components/banner.scss';

class Banner extends Component {
    render() {
        return (
            <Slider autoplay={3000}  className="slider-wrapper">
                {this.props.bannerData.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            {(item.button !== '') ? `<button>${item.button}</button>` : ``}
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}

export default Banner;