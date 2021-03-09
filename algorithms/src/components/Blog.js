import React from 'react'

import Header from './Header'
import NewPostForm from './NewPostForm'
import PostsList from './PostsList'
import SearchForm from './SearchForm'

import PostsContextProvider from '../contexts/PostsContext';

export default function Blog() {
    return (
        <div>
           <PostsContextProvider>
                <Header/>
                <SearchForm />
                <PostsList />
                <NewPostForm/>
            </PostsContextProvider>   
        </div>
    )
}
