import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="about"/>
            <img src={require("./images/about-me-500x500.jpg")} alt="Shannon"/>
            <h1>Hi,</h1>
            <p>I’m Shannon. I currently work a design job at a respectable firm in New York City. 
                I hustled to start my career in the industry I got my degree in and never questioned the 
                standard 9-5 jobs most of us get post-graduation. A few months into working, I realized 
                just how structured and restricted my time had become and frankly wasn’t too happy about it.
                <br/><br/> As a coding and tech enthusiast, I’m currently exploring alternatives to standard white collar work. I began 
                my coding journey by teaching myself javascript, building this website and starting the altgrind podcast. Give a listen and follow me as I experiment and try to find more interesting career options for the rest of us!
</p>
        </Layout>
    )
};

export default AboutPage;