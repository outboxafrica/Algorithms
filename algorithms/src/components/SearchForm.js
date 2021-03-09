import React, { useState, useContext } from 'react'

import PostDetails from './PostDetails';
import { PostsContext } from '../contexts/PostsContext';



export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState('')


 

    const { posts } = useContext(PostsContext);
    
    // { posts.filter((post)=>{
    //    if(searchTerm == ''){return post}   
    //    else if(post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    // })}

    const handleSubmit=(e)=>{
        e.preventDefault()
            posts.filter(post =>{
                // if(searchTerm === ''){return post}   
                 if(post.title.toLowerCase().includes(searchTerm.toLowerCase())) 
                {
                    console.log(post);
                }
             return post;

            }).map(post => {
                return ( <PostDetails post={post} key={post.id} /> )
            })
    }

    return (
        <aside>
            <form onSubmit={handleSubmit} className="search-form">
                <p className="title">SEARCH</p>
                <input type="text" placeholder="Search" value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)} />
            </form>
        </aside>
        
    )
}
