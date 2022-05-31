import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {GraphQLClient, gql} from "graphql-request";
import BlogCard from "../components/BlogCard";

const graphCms = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl3odmqpk5n9g01xk6dhx5l24/master')


const QUERY = gql`
{
    posts {
        id,
        title,
        date_published,
        slug,
        cover_photo {
        id,
        url
        },
        content {
            html
        },
        author{
            name,
            avatar {
                url
            }
        },
        
    }
}
`

export async function getStaticProps() {
    const {posts} = await graphCms.request(QUERY)
    return {
        props: {
            posts,
        }, revalidate: 10
    };
}

export default function Home({posts}) {
    console.log('posts: ', posts)
    //TODO: cover_photo returning null. Reason - unknown
    return (<div className={styles.container}>

        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
            {posts.map((post) => (<BlogCard
                    title={post.title}
                    author={post.author}
                    coverPhoto={post.cover_photo}
                    key={post.id}
                    datePublished={post.date_published}
                    slug={post.slug}
                    // post={post}
                />


            ))}
        </main>


    </div>)
}
