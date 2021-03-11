import React from 'react'

import Header from './Header'
import PostsList from './PostsList'
import SearchForm from './SearchForm'

import PostsContextProvider from '../contexts/PostsContext';
import Footer from './Footer'

export default function Blog() {
    return (
        <div>
           <PostsContextProvider>
                <Header/>
                <SearchForm />

                <PostsList />
                <Footer/>
            </PostsContextProvider>   
        </div>
    )
}
