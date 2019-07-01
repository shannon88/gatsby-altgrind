import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import indexStyles from './index.module.scss';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="home"/>
            <h2>It's grind time.</h2>
            <img src={require("./images/altgrind-album-forWeb_500x500.jpg")} alt="Album Art"/>
        </Layout>
    )
};

export default IndexPage;