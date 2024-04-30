import * as React from 'react'
import Layout from '../component/layout'
import Seo from '../component/seo'

const BlogPage = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
        </Layout>
    )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage