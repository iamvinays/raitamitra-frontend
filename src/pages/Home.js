import React from 'react';
import Banner from '../components/Banner';
import HomepageBanner from '../data/HomepageBanner';
import Campaigns from '../data/Campaigns';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import CampaignCard from '../components/CampaignCard';
import '../styles/pages/home.scss';
import '../styles/includes/marquee.scss';

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
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
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
		<div className="marquee">
			<strong className="content">
			DAP(ಡಿಎಪಿ), Urea(ಯೂರಿಯಾ), Potash(ಪೊಟಾಷ್), Micro Nutrient(ಮೈಕ್ರೋ ನ್ಯೂಟ್ರಿಯೆಂಟ್), Organic Manure(ಆರ್ಗಾನಿಕ್ ಮೆನ್ಯೂರ್), Chemical Fertilizers(ಕೆಮಿಕಲ್ ಫರ್ಟಿಲೈಸರ್ಸ್), Seeds(ಸೀಡ್ಸ್) with all Documentation from Certified Fertilizers only.
			</strong>
		</div>
        <div className="container">
			<section className="intro">
				<h2>ಅನ್ನ ಕೊಡುವ ರೈತ ಚೆನ್ನಾಗಿದ್ದರೆ ದೇಶ ಚೆನ್ನಾಗಿರುತ್ತದೆ. ರೈತಮಿತ್ರ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಕೈಜೋಡಿಸಿ ಸಹಕರಿಸಿ.</h2>
				<p>ಎಮ್.ಎಮ್.ಜಿ.ಎಸ್ ಸಂಸ್ಥೆಯ ನೇತೃತ್ವದಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ "ರೈತಮಿತ್ರ" ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಕರ್ನಾಟಕದ ಹಲವಾರು ಸಂಘಸಂಸ್ಥೆಗಳು, ಎನ್.ಜಿ.ಓ, ರಸಗೊಬ್ಬರ ಮಾರಾಟಗಾರರು, ಕಂಪನಿಗಳು ಹಾಗೂ ದಾನಿಗಳ ಸಹಯೋಗದೊಂದಿಗೆ 5 ಎಕರೆಗಿಂತ ಕಡಿಮೆ ಭೂಮಿ, ಹಿಂದುಳಿದ ವರ್ಗ, ಬಡ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ನೆರವಾಗುವ ನಿಟ್ಟಿನಲ್ಲಿ ರಸಗೊಬ್ಬರಗಳು, ಬಿತ್ತನೇ ಬೀಜ, ಕೀಟನಾಷಕಗಳನ್ನು ಅತಿ ಕಡಿಮೇ ದರದಲ್ಲಿ ವಿತರಿಸುವ ಒಂದು ಪ್ರಯತ್ನವಾಗಿದೆ. ಹೆಚ್ಚು ಹೆಚ್ಚು ರೈತರು ಇದರ ಉಪಯೋಗ ಪಡೆಯಬೇಕೆಂದು ಆಶಿಸುತ್ತೇವೆ.</p>
			</section>
            <section className="trending-campaigns">
                <h2 className="section-head">Trending Campaigns</h2>
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