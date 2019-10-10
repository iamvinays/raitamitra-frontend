import React from 'react';
import Banner from '../components/Banner';
import HomepageBanner from '../data/HomepageBanner';
import Campaigns from '../data/Campaigns';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import CampaignCard from '../components/CampaignCard';
import '../styles/pages/home.scss';

const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
};

const Home = () => (
    <div className="homepage">
        <Banner bannerData={HomepageBanner} />
        <div className="container">
            <section className="trending-campaigns">
                <h1 className="section-head">Trending Campaigns</h1>
                <Slider {...sliderSettings}>
                    {Campaigns.map((item, index) => (
                        <CampaignCard {...item} key={index} />
                    ))}
                </Slider>
            </section>
        </div>
    </div>
);

export default Home;