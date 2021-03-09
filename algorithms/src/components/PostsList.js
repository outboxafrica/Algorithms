import React, { useContext } from 'react'

import PostDetails from './PostDetails';
import { PostsContext } from '../contexts/PostsContext';


export default function PostsList()  {
   const { posts } = useContext(PostsContext);
   //checking if the posts array has any posts in it if so, display them
    return posts.length ? (
        <div className="posts-list">
            <ul>
                {posts.map(post => {
                    return ( <PostDetails post={post} key={post.id} /> )
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">
                No posts to show 
            </div> 
        )
}
