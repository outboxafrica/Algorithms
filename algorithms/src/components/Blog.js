import React from 'react'

import BlogIntro from './BlogIntro'
import PostsList from './PostsList'
import SearchForm from './SearchForm'
import BlogNav from './BlogNav'
import PostsContextProvider from '../contexts/PostsContext';
import Footer from './Footer'

export default function Blog() {
    return (
        <div>
           <PostsContextProvider>
               <BlogNav/>
                <BlogIntro/>
                <SearchForm />

                <PostsList />
                <Footer/>
            </PostsContextProvider>   
        </div>
    )
}
