import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="home"/>
            <h1>Hello.</h1>
            <h2>Welcome to hammer time.</h2>
            <p>Check out the <Link to="/podcast">podcast</Link>!</p>
        </Layout>
    )
};

export default IndexPage;