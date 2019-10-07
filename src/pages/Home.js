import React from 'react';
import Banner from '../components/Banner';
import HomepageBanner from '../data/HomepageBanner';

const Home = () => (
    <Banner bannerData={HomepageBanner} />
);

export default Home;