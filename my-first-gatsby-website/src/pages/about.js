import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <>
            <h1>About Page</h1>
            <Link to="/">Back to Home</Link>
            {/* <a href='/'>Back to home</a> */}
            <p>This is About page, I am putting Everything information regarding specific things here.</p>
        </>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage
