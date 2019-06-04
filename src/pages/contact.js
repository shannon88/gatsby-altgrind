import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="contact"/>
            <h1>Contact</h1>
            <p>email: <br/>
            phone: <br/>
            <a href="https://www.instagram.com/altgrind/" target="_blank">instagram DMs</a>
            </p> 
        </Layout>
    )
};

export default ContactPage;