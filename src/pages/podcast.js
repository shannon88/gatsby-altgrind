import React from 'react';

import Layout from '../components/layout';
import {Link, graphql, useStaticQuery} from 'gatsby';
import podcastStyles from './podcast.module.scss';
import Head from '../components/head';


const PodcastPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        }
                    fields {
                        slug
                    }
                    }
                }
            }
        }
    `)
    
    return (
        <Layout>
            <Head title="podcast"/>
            <h1>The Podcast</h1>
            <ol className={podcastStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={podcastStyles.post}>
                            <Link to={`/podcast/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                        
                    )
                })}
            </ol>
        </Layout>
    )
};

export default PodcastPage;