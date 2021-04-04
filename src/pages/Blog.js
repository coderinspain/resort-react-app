import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"


const Blog = () => {
    return(
        <>
            <Hero hero="roomsHero">
            <Banner title="blog">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
            </Hero>
        </>
    );
}

export default Blog;