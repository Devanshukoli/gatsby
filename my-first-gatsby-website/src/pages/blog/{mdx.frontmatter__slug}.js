import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../component/layout'
import Seo from '../../component/seo'

const BlogPost = ({ data, children }) => {
    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <p>My blog post contents will go here (eventually).</p>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost