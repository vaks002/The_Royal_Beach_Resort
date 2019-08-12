import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

import {Link} from "react-router-dom";


export default function Home() {
    return (
        <React.Fragment>
            <Hero >
                <Banner title="luxurious rooms" subtitle="delux rooms strating at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
        </React.Fragment>
    );
}