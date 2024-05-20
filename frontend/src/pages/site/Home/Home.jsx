

import React from 'react';
import { Helmet } from 'react-helmet'
import Carousel from '../../../components/site/Carousel/Carousel';
import Section2_italian from '../../../components/site/Section2_italian/Section2_italian';
import Section3 from '../../../components/site/Section3_basket/Section3';
import Customer from '../../../components/site/Customer/Customer';
import Blog from '../../../components/site/theBlog/blog';
import Sign from '../../../components/site/signIn/Sign';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Carousel/>
            <Section2_italian/>
            <Section3/>
            <Customer/>
            <Blog/>
            <Sign/>
        </div>
    )
}

export default Home
