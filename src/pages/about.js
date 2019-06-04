import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="about"/>
            <h1>Hi, I'm Shannon</h1>
            <p>Insert bio here.</p>
            <p><Link to="/contact">Reach out if you want to work together</Link></p>
        </Layout>
    )
};

export default AboutPage;